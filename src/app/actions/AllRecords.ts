import { createClient } from "@/lib/supabse/server";
import { unstable_noStore as noStore } from "next/cache";

export const getAllRecords = async () => {
  noStore(); // This opts out of static rendering and cache
  const supabaseApi = await createClient();
  const user = await supabaseApi?.auth?.getUser();
  const userId = user?.data?.user?.id;
  const { data, error } = await supabaseApi
    .from("records")
    .select("*")
    .eq("user_id", userId)
    .range(0, 5)
    .order("updated_at", { ascending: false }); // This ensures Supabase doesn't cache the result

  if (error) {
    return { data: null, message: "Failed to fetch records", success: false };
  }

  return {
    data,
    message: "Records fetched successfully",
    success: true,
  };
};
