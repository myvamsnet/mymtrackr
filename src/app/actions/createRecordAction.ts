"use server";
import { createClient } from "@/lib/supabse/server";
import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { invalidateRecordsCache } from "./AllRecords";

export const createRecordAction = async (formData: FormData) => {
  const type = formData.get("type");
  const amount = formData.get("amount") as string;
  const name = formData.get("name") as string;
  const note = formData.get("note") as string;
  const image = formData.get("file") as File;

  if (!type) {
    return { success: false, message: "Record Type is required" };
  }

  const supabaseApi = createClient();
  const { data: userData } = await supabaseApi.auth.getUser();

  const userId = userData?.user?.id;
  if (!userId) {
    return { success: false, message: "Unauthorized" };
  }

  const payload = {
    name,
    amount,
    note,
    type,
    user_id: userId,
    imageUrl: null as string | null,
  };
  try {
    if (image) {
      const imageUrl = (await uploadImageToCloudinary(image)) as string;
      if (!imageUrl) {
        return { success: false, message: "Failed to upload image" };
      }

      payload.imageUrl = imageUrl;
    }

    const { data, error } = await supabaseApi
      .from("records")
      .insert([payload])
      .eq("user_id", userId)
      .single();

    if (error) {
      return { success: false, message: "Failed to create record" };
    }
    await invalidateRecordsCache(); // Invalidate the cache AFTER the successful insert
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
