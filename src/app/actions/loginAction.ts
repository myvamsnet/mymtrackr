"use server";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = createClient();

  if (!email || !password) {
    return {
      success: false,
      message: "Please provide both email and password.",
    };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Sign-in error:", error);
    return {
      success: false,
      message: "Invalid email or password. Please check and try again.",
    };
  }

  if (data?.user?.id) {
    const { data: userProfileData, error: userProfileError } = await supabase
      .from("usersprofile")
      .select("*")
      .eq("user_id", data.user.id)
      .single();

    if (userProfileError || !userProfileData) {
      console.log("User profile error:", userProfileError);
      await supabase.auth.signOut();
      return {
        success: false,
        message: "User profile not found. Please try again.",
      };
    }
  }

  // If everything is successful, revalidate the path and redirect
  revalidatePath("/home");
  redirect("/home?login=success");
}
