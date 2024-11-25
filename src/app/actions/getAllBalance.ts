import { calculateWorth } from "@/lib/helper/calculateWorth";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const getAllBalance = async () => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  const userId = user?.data?.user?.id;
  const { data, error } = await supabaseApi
    .from("records")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    return { data: null, message: "Failed to fetch records", success: false };
  }

  const { grossWorth, netWorth } = calculateWorth(data);
  revalidatePath("/");
  return {
    grossWorth,
    netWorth,
  };
};
