// app/actions.ts
"use server";
import { generateReferralCode } from "@/lib/helper/generateReferralCode";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function RegisterAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const fullName = formData.get("fullName") as string;
  const referCode = formData.get("referCode") as string;

  // Default trial expiry date (14 days)
  const trialExpiryDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
  const supabase = createClient();

  if (!email || !password || !fullName) {
    throw new Error("Please provide email, password, and full name");
  }

  // Step 1: Sign up the user using Supabase auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.log("Sign-up error:", error);
    return {
      success: false,
      message: error.message,
    };
  }

  // Generate a referral code for the new user
  const userReferralCode = generateReferralCode();

  // Step 2: Insert the new user into the 'usersprofile' table
  if (data.session?.access_token && data.user?.id) {
    const { error } = await supabase
      .from("usersprofile")
      .insert([
        {
          email,
          fullName,
          user_id: data.user.id,
          referral_code: userReferralCode,
          subscription_status: "trialing",
          subscription_expiry: trialExpiryDate,
          referral_count: 0,
        },
      ])
      .select("*")
      .single();
    if (error) {
      console.error("User profile creation error:", error);
      await supabase.auth.signOut();
      return {
        success: false,
        message: "User profile creation failed. Please try again.",
      };
    }

    // Step 3: Handle referral logic if referral code is provided
    if (referCode) {
      const { data: referrer, error: referrerError } = await supabase
        .from("usersprofile")
        .select("id, referral_count, subscription_expiry")
        .eq("referral_code", referCode)
        .single();

      if (referrerError) {
        console.log("Referrer error:", referrerError);
        return {
          success: false,
          message: "Invalid referral code. Please check and try again.",
        };
      }

      if (referrer) {
        // Increment referral count
        let newReferralCount = referrer.referral_count + 1;

        // Check how many of the referrer's referrals have an active subscription
        const { data: referrals, error: referralsError } = await supabase
          .from("referrals")
          .select("referred_id")
          .eq("referrer_id", referrer.id);

        if (referralsError) {
          console.log("Referrals error:", referralsError);
          return {
            success: false,
            message: "Error fetching referrals",
          };
        }

        const referredUserIds = referrals.map(
          (referral) => referral.referred_id
        );

        // Get the subscription status of the referred users
        const { data: referredSubscriptions, error: subscriptionsError } =
          await supabase
            .from("usersprofile")
            .select("subscription_status")
            .eq("user_id", referredUserIds);

        if (subscriptionsError) {
          console.log("Subscriptions error:", subscriptionsError);
          return {
            success: false,
            message: "Error fetching subscriptions",
          };
        }

        // Count how many referred users have an active subscription
        const activeSubscriptionsCount = referredSubscriptions.filter(
          (subscription) => subscription.subscription_status === "active"
        )?.length;

        // Only extend the subscription if referral count is 3 or more and at least 3 referrals have active subscriptions
        if (newReferralCount >= 3 && activeSubscriptionsCount >= 3) {
          let newExpiry = new Date(referrer.subscription_expiry || Date.now());
          newExpiry.setFullYear(newExpiry.getFullYear() + 1);

          // Update referrer's record with the new referral count and subscription expiry
          const { error: referrerUpdateError } = await supabase
            .from("usersprofile")
            .update({
              referral_count: newReferralCount,
              subscription_expiry: newExpiry,
            })
            .eq("id", referrer.id);

          if (referrerUpdateError) {
            console.log("Referrer update error:", referrerUpdateError);
            return {
              success: false,
              message: "Error updating referrer's subscription",
            };
          }
        } else {
          // Update referrer's referral count without extending subscription expiry
          const { error: referrerUpdateError, data: updateUser } =
            await supabase
              .from("usersprofile")
              .update({
                referral_count: newReferralCount,
              })
              .eq("id", referrer.id);

          console.log(updateUser, referrer.id);
          if (referrerUpdateError) {
            console.log("Referrer update error:", referrerUpdateError);
            return {
              success: false,
              message: "Error updating referrer's referral count",
            };
          }
        }

        // Insert into the referrals table using the referrer_id and referred_id
        const { error: referralInsertError } = await supabase
          .from("referrals")
          .insert({
            referrer_id: referrer.id, // Foreign key to the referrer
            referred_id: data.user.id, // Foreign key to the new user
          });

        if (referralInsertError) {
          console.log("Referral insert error:", referralInsertError);
          return {
            success: false,
            message: "Error creating referral record",
          };
        }
      }
    }
  }
  revalidatePath("/");
  redirect("/home?signup=success");
}
