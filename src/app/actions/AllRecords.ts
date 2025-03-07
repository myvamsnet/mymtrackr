"use server";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const getAllRecords = async () => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  const userId = user?.data?.user?.id;

  if (!userId) {
    return {
      data: null,
      message: "User not authenticated",
      success: false,
    };
  }

  const { data, error } = await supabaseApi
    .from("records")
    .select("*")
    .eq("user_id", userId)
    .range(0, 5)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error fetching records:", error); // Log the error
    return { data: null, message: "Failed to fetch records", success: false };
  }

  return {
    data,
    message: "Records fetched successfully",
    success: true,
  };
};

export const invalidateRecordsCache = async () => {
  revalidatePath("/");
};
