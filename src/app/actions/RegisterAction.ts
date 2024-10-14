'use server';

import { generateReferralCode } from '@/lib/helper/generateReferralCode';
import { createClient } from '@/lib/supabse/server';
import { redirect } from 'next/navigation';

export const RegisterAction = async (formData: FormData) => {
  const supabase = createClient();
  const referralCode = formData.get('referralCode') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('fullName') as string;

  if (!email && !password && !fullName) {
    return {
      success: false,
      message: 'Please provide all required fields',
    };
  }
  let { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    console.log(signUpError.message, 'Register Failed');
    return {
      success: false,
      message: 'Something wrent wrong , Try Again later',
    };
  }
  // // Get the newly created user ID
  const userId = signUpData.user?.id;
  // Generate a referral code for the new user
  const userReferralCode = generateReferralCode();

  if (signUpData?.user?.id) {
    const { error: userProfileError } = await supabase
      .from('userProfile')
      .insert([
        {
          id: userId as string,
          fullName,
          email,
          user_id: userId, // reference the user ID
          referralCode: userReferralCode, // Store the referral code in the User table
        },
      ])
      .select('*')
      .single();

    if (userProfileError) {
      console.log(userProfileError.message, 'User Profile Creation Failed');
      return {
        success: false,
        message: 'User Profile Creation Failed',
      };
    }
  }
  if (referralCode) {
    // Find the referrer by referral code
    const { data: referrer, error: referrerError } = await supabase
      .from('userProfile')
      .select('*')
      .eq('referralCode', referralCode)
      .single();

    if (referrer && !referrerError) {
      // Create a referral entry
      const { error: referralCreateError } = await supabase
        .from('referrals')
        .insert({
          referrerId: referrer.id,
          refereeId: userId, // Set the newly created user as the referee
        });

      if (referralCreateError) {
        console.log(referralCreateError, 'referralCreateError');
        return {
          success: false,
          message: 'Failed to create referral',
        };
      }
    }
  }

  // Create a trial subscription for the new user
  const trialExpiration = new Date();
  trialExpiration.setDate(trialExpiration.getDate() + 14);

  const { error: subscriptionCreateError, data: subscriptionsData } =
    await supabase
      .from('subscriptions')
      .insert({
        user_id: userId,
        userProfile_id: userId,
        status: 'trial',
        expiresAt: trialExpiration.toISOString(),
        amount: 0, // Set the amount for the subscription, can be adjusted based on your pricing model
      })
      .select('*')
      .single();

  if (subscriptionCreateError) {
    console.log(subscriptionCreateError, 'subscriptionCreateError');
    return { message: 'Failed to create subscription.', success: false };
  }

  // Redirect to the home page upon successful registration
  redirect('/app/home'); // Redirecting to the home page
};
