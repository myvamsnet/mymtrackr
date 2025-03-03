import { calculateWorth } from "@/lib/helper/calculateWorth";
import { createClient } from "@/lib/supabse/server";
import { unstable_noStore as noStore } from "next/cache";
export const getAllBalance = async () => {
  noStore(); // This opts out of static rendering and cache
  const supabaseApi = await createClient();
  const user = await supabaseApi?.auth?.getUser();
  const userId = user?.data?.user?.id;
  const { data, error } = await supabaseApi
    .from("records")
    .select("type, amount")
    .eq("user_id", userId);

  if (error) {
    return { data: null, message: "Failed to fetch records", success: false };
  }

  const { grossWorth, netWorth } = calculateWorth(data);
  return {
    grossWorth,
    netWorth,
  };
};
