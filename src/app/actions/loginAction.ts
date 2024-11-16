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
    .from("userProfile")
    .select(
      `
      *,
      subscriptions(expiresAt)
    `
    )
    .eq("id", userId)
    .single();

  if (userError || !user) {
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
    const subscriptionExpiryDate = dayjs(user.subscriptions.expiresAt);
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
  redirect("/app/home?login=success"); // Redirecting to the home page

  // // Step 4: Fetch the user's referrals and join with referees and their subscriptions
  // const { data: referrals, error: referralsError } = await supabase
  //   .from("referrals")
  //   .select(
  //     `
  //     refereeId,
  //     referee:userProfile!referrals_refereeId_fkey (subscriptions(status))
  //   `
  //   )
  //   .eq("referrerId", user.id);

  // if (referralsError) {
  //   await supabase.auth.signOut();
  //   return {
  //     success: false,
  //     message: generalErrorMessage,
  //   };
  // }

  // const referralsData = referrals as unknown as ReferralsType[];

  // // Step 6: Count referees with active or trial subscriptions
  // const activeCount = referralsData?.map((ref) => {
  //   // Since subscriptions is an object, directly access the status
  //   return ref?.referee?.subscriptions?.status;
  // });

  // if (
  //   activeCount.every((status) => status === "active") &&
  //   activeCount.length >= 3 &&
  //   user.subscriptions?.status === "active"
  // ) {
  //   // Step 5: If the user has referred 3 or more users and all referees have active subscriptions, extend the user's subscription
  //   const newExpiryDate = dayjs(user.subscriptions.expiresAt)
  //     .add(1, "year")
  //     .toDate();

  //   const { error: subscriptionUpdateError } = await supabase
  //     .from("subscriptions")
  //     .update({ expiresAt: newExpiryDate })
  //     .eq("user_id", user.id);

  //   if (subscriptionUpdateError) {
  //     await supabase.auth.signOut();
  //     return {
  //       success: false,
  //       message: generalErrorMessage,
  //     };
  //   }
  // }
};
interface ReferralsType {
  refereeId: string;
  referee: {
    subscriptions: {
      status: string;
    };
  };
}
