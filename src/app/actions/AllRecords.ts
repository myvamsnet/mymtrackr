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
    .range(0, 9)
    .order("updateat", { ascending: false });

  if (error) {
    console.log(error);
    return { data: null, error: "Failed to fetch records" };
  }

  revalidatePath("/");
  return { data, error };
};
