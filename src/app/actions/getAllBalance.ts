import { calculateWorth } from "@/lib/helper/calculateWorth";
import { errorResponse } from "@/lib/helper/errorResponse";
import { createClient } from "@/lib/supabse/server";
import { verifyUser } from "@/lib/supabse/verifyUser";

export const getAllBalance = async () => {
  const supabaseApi = createClient();
  const { user, error } = await verifyUser();

  if (error) {
    return {
      message: error,
      success: false,
    };
  }
  const { data, error: recordsError } = await supabaseApi
    .from("records")
    .select("*")
    .eq("user_id", user?.id);

  if (recordsError) {
    return { data: null, message: "Failed to fetch records", success: false };
  }
  const { avaliableBalance, finalBalance, profit } = calculateWorth(data);
  return { avaliableBalance, finalBalance, profit };
};
