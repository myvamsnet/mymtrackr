"use server";

import { supabaseError } from "@/constant/systemError";
import { generateReferralCode } from "@/lib/helper/generateReferralCode";
import { createClient } from "@/lib/supabse/server";
import { redirect } from "next/navigation";

export const RegisterAction = async (formData: FormData) => {
  const supabase = createClient();
  const referralCode = formData.get("referralCode") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;

  if (!email && !password && !fullName) {
    return {
      success: false,
      message: "Please provide all required fields",
    };
  }
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });
  if (signUpError) {
    const errorMessage = supabaseError.includes(signUpError?.code as string)
      ? signUpError.message
      : "Something went wrong. Please try again.";
    return {
      success: false,
      message: errorMessage,
    };
  }

  // Get the newly created user ID
  const userId = signUpData.user?.id;
  // Generate a referral code for the new user
  const userReferralCode = generateReferralCode();

  if (signUpData?.user?.id) {
    const { error: userProfileError } = await supabase
      .from("userProfile")
      .insert([
        {
          id: userId as string,
          fullName,
          email,
          user_id: userId, // reference the user ID
          referralCode: userReferralCode, // Store the referral code in the User table
        },
      ])
      .select("id");

    if (userProfileError) {
      return {
        success: false,
        message: "User Profile Creation Failed",
      };
    }
  }
  if (referralCode) {
    // Find the referrer by referral code
    const { data: referrer, error: referrerError } = await supabase
      .from("userProfile")
      .select("id")
      .eq("referralCode", referralCode)
      .single();

    if (referrer && !referrerError) {
      // Create a referral entry
      const { error: referralCreateError } = await supabase
        .from("referrals")
        .insert({
          referrerId: referrer.id,
          refereeId: userId, // Set the newly created user as the referee
        });

      if (referralCreateError) {
        return {
          success: false,
          message: "Failed to create referral",
        };
      }
    }
  }

  // Create a trial subscription for the new user
  const trialExpiration = new Date();
  trialExpiration.setDate(trialExpiration.getDate() + 14);

  const { error: subscriptionCreateError } = await supabase
    .from("subscriptions")
    .insert({
      user_id: userId,
      userProfile_id: userId,
      status: "trial",
      expiresAt: trialExpiration.toISOString(),
      amount: 0, // Set the amount for the subscription, can be adjusted based on your pricing model
    })
    .select("id");

  if (subscriptionCreateError) {
    return { message: "Failed to create subscription.", success: false };
  }

  // Redirect to the home page upon successful registration
  redirect("/home?signup=success"); // Redirecting to the home page
};
