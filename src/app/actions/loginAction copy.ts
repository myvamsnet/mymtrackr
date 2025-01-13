"use server";

import { createClient } from "@/lib/supabse/server";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

const ERROR_MESSAGES = {
  MISSING_FIELDS: "Please provide all required fields",
  INVALID_CREDENTIALS: "Invalid login credentials",
  GENERAL_ERROR: "Something went wrong, please try again later",
} as const;

async function updateLastActive(
  supabase: any,
  userId: string,
  lastActive: string
) {
  const { error } = await supabase
    .from("userprofile")
    .update({ last_active: lastActive })
    .eq("id", userId);

  return error;
}

async function checkAndUpdateSubscription(supabase: any, user: any) {
  if (!user.subscriptions) return null;

  const now = dayjs();
  const subscriptionExpiryDate = dayjs(user.subscriptions.expiresAt);

  if (subscriptionExpiryDate.isBefore(now)) {
    const { error } = await supabase
      .from("subscriptions")
      .update({ status: "expired" })
      .eq("user_id", user.id);

    return error;
  }

  return null;
}

async function getUserProfile(supabase: any, userId: string) {
  const { data, error } = await supabase
    .from("userprofile")
    .select(`*, subscriptions(expiresAt)`)
    .eq("id", userId)
    .single();

  return { data, error };
}

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

  // Fetch user profile and check for errors
  if (!user) {
    return {
      success: false,
      message: ERROR_MESSAGES.INVALID_CREDENTIALS,
    };
  }

  const { data: userDetails, error: userDetailsError } = await getUserProfile(
    supabase,
    user.id
  );

  if (userDetailsError) {
    console.error("User profile error:", userDetailsError);
    return {
      success: false,
      message: ERROR_MESSAGES.GENERAL_ERROR,
    };
  }

  // Execute profile and subscription updates in parallel
  const [profileUpdateError, subscriptionError] = await Promise.all([
    updateLastActive(
      supabase,
      user.id as string,
      user.last_sign_in_at as string
    ),
    checkAndUpdateSubscription(supabase, user),
  ]);

  if (profileUpdateError || subscriptionError) {
    return {
      success: false,
      message: ERROR_MESSAGES.GENERAL_ERROR,
    };
  }

  // Redirect based on user role
  if (userDetails.role === "admin") {
    redirect("/admin/dashboard");
  }

  redirect("/home?login=success");
}
