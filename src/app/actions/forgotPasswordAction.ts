"use server";

import { createClient } from "@/lib/supabse/server";

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const supabase = createClient();
  if (!email) {
    return {
      success: false,
      message: "Please provide a valid email",
    };
  }

  const { error, data } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    return {
      success: false,
      message: error!.message,
    };
  }

  return {
    success: true,
    message:
      "We've sent a password reset link to your email address. Please check your inbox.",
  };
};
