"use server";
import { createClient } from "@/lib/supabse/server";

export const deActivateAccount = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return {
      success: false,
      message: "User not authenticated",
    };
  }
  const { data, error } = await supabase
    .from("userprofile")
    .update({ isActive: false })
    .eq("id", user.id)
    .select()
    .single();
  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }
  if (data) {
    return await supabase.auth.signOut();
  }
  return {
    success: true,
    message: "User Account Deactived Successfully",
  };
};
