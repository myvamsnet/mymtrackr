"use server";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const getAllRecords = async () => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  const userId = user?.data?.user?.id;
  const { data, error } = await supabaseApi
    .from("records")
    .select("*")
    .eq("user_id", userId)
    .range(0, 5)
    .order("updated_at", { ascending: false });

  if (error) {
    return { data: null, message: "Failed to fetch records", success: false };
  }

  revalidatePath("/");
  return {
    data,
    message: "Records fetched successfully",
    success: true,
  };
};
