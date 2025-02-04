"use server";

import { createClient } from "@/lib/supabse/server";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

const ERROR_MESSAGES = {
  MISSING_FIELDS: "Please provide all required fields",
  INVALID_CREDENTIALS: "Invalid login credentials",
  GENERAL_ERROR: "Something went wrong, please try again later",
} as const;

export async function loginAction(formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Validate input
  if (!email || !password) {
    return { success: false, message: ERROR_MESSAGES.MISSING_FIELDS };
  }

  // Attempt login
  const {
    data: { user },
    error: loginError,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    console.error("Login error:", loginError);
    return {
      success: false,
      message: loginError.message || ERROR_MESSAGES.GENERAL_ERROR,
    };
  }

  // Check if user exists
  if (!user) {
    return {
      success: false,
      message: ERROR_MESSAGES.INVALID_CREDENTIALS,
    };
  }

  // Fetch user profile
  const { data: userDetails, error: userDetailsError } = await supabase
    .from("userprofile")
    .select(`*, subscriptions(*)`)
    .eq("id", user.id)
    .single();

  if (userDetailsError) {
    console.error("User profile error:", userDetailsError);
    return {
      success: false,
      message: ERROR_MESSAGES.GENERAL_ERROR,
    };
  }

  // Update user profile using RPC
  const updateLastActiveError = await supabase.rpc("update_user_last_active", {
    update_user_id: user.id,
    last_sign_in_at: user.last_sign_in_at,
  });

  if (updateLastActiveError.error) {
    console.error("Update last active error:", updateLastActiveError.error);
    await supabase.auth.signOut();
    return {
      success: false,
      message: ERROR_MESSAGES.GENERAL_ERROR,
    };
  }

  // Update subscription status using RPC
  const now = dayjs();
  const subscriptionExpiryDate = dayjs(userDetails.subscriptions.expiresAt);

  if (subscriptionExpiryDate.isBefore(now)) {
    const updateSubscriptionError = await supabase.rpc(
      "update_subscription_status",
      {
        updated_user_id: user.id,
        subscription_status: "expired",
      }
    );

    if (updateSubscriptionError.error) {
      await supabase.auth.signOut();
      console.error(
        "Update subscription error:",
        updateSubscriptionError.error
      );
      return {
        success: false,
        message: ERROR_MESSAGES.GENERAL_ERROR,
      };
    }
  }

  // Redirect based on user role
  if (userDetails.role === "admin") {
    redirect("/admin/dashboard");
  }

  if (userDetails.role === "user" && !userDetails.isActive) {
    await supabase.auth.signOut();
    return {
      success: false,
      message:
        "The account has been deactivated. Please contact our support team for assistance.",
    };
  }
  redirect("/home?login=success");
}
