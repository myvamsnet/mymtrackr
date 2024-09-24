"use server";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const createRecordAction = async (formData: FormData) => {
  const type = formData.get("type");
  const amount = formData.get("amount") as string;
  const name = formData.get("name") as string;
  const note = formData.get("note") as string;
  const image = formData.get("image") as string;

  if (!type) {
    return { success: false, error: "Record Type is required" };
  }

  const supabaseApi = createClient();
  const { data: userData } = await supabaseApi.auth.getUser();

  const userId = userData?.user?.id;
  if (!userId) {
    return { success: false, error: "User not found" };
  }

  const payload = {
    name,
    amount,
    note,
    image,
    type,
    user_id: userId,
  };

  try {
    const { data, error } = await supabaseApi
      .from("records")
      .insert([payload])
      .select();

    if (error) {
      return { success: false, error: "Failed to create record" };
    }

    revalidatePath("/home");
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
