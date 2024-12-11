"use server";

import { createClient } from "@/lib/supabse/server";
import { redirect } from "next/navigation";

export const resetPasswordAction = async (formData: FormData) => {
  const password = formData.get("password") as string;
  const access_token = formData.get("access_token") as string;
  const supabase = createClient();
  if (!password) {
    return {
      success: false,
      message: "Please provide a valid password",
    };
  }

  if (!access_token) {
    return {
      success: false,
      message: "Token not found",
    };
  }
  const { error } = await supabase.auth.updateUser({
    password,
  });
  if (error) {
    return {
      success: false,
      message: error!.message,
    };
  }
  redirect("/home");
};
