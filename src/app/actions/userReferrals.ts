import { createClient } from "@/lib/supabse/server";

export const userReferrals = async (userId: string) => {
  const supabase = createClient();
  const { data: referrals, error: referralsError } = await supabase
    .from("referrals")
    .select("*")
    .eq("referrer_id", userId)
    .range(0, 6);

  if (referralsError) {
    await supabase.auth.signOut();
    return {
      success: false,
      message: "An error occurred while fetching referrals",
    };
  }
  return {
    success: true,
    data: referrals,
  };
};
