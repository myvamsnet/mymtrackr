"use server";

import { supabaseError } from "@/constant/systemError";
import { createClient } from "@/lib/supabse/server";
import dayjs from "dayjs";
import { redirect } from "next/navigation";

export const loginAction = async (formData: FormData) => {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const validateUserError = "Invalid login credentials";
  const generalErrorMessage = "Something went wrong, please try again later";
  if (!email || !password) {
    return {
      success: false,
      message: "Please provide all required fields",
    };
  }

  let { data: loginData, error: loginError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (loginError) {
    const errorMessage = supabaseError.includes(loginError?.code as string)
      ? loginError.message
      : "Something went wrong. Please try again.";
    return {
      success: false,
      message: errorMessage,
    };
  }

  const userId = loginData.user?.id;

  // Step 2: Fetch the user with referrals and subscriptions
  const { data: user, error: userError } = await supabase
    .from("userprofile")
    .select(
      `
      *,
      subscriptions(expired_at)
    `
    )
    .eq("id", userId)
    .single();

  if (userError || !user) {
    console.log(userError);
    await supabase.auth.signOut();
    return {
      success: false,
      message: validateUserError,
    };
  }

  // Step 3: Check if the subscription exists and whether it has expired
  if (user.subscriptions) {
    const now = dayjs();

    // Check if the subscription has expired
    const subscriptionExpiryDate = dayjs(user.subscriptions.expired_at);
    if (subscriptionExpiryDate.isBefore(now)) {
      // If the subscription has expired, update its status to "expired"
      const { error: updateError } = await supabase
        .from("subscriptions")
        .update({ status: "expired" })
        .eq("user_id", user.id);

      if (updateError) {
        await supabase.auth.signOut();
        return {
          success: false,
          message: generalErrorMessage,
        };
      }
    }
  }
  redirect("/home?login=success"); // Redirecting to the home page
};
interface ReferralsType {
  refereeId: string;
  referee: {
    subscriptions: {
      status: string;
    };
  };
}
