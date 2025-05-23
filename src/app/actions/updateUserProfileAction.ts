"use server";

import { createClient } from "@/lib/supabse/server";
import { uploadImageToCloudinary } from "@/lib/uploadImageToCloudinary";
import { revalidatePath } from "next/cache";

export const updateProfileAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const fullName = formData.get("fullName") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const image = formData.get("file") as File;

  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();

  if (!user?.data?.user?.id) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  try {
    // Update profile in Supabase
    const updateData: {
      email: string;
      fullName: string;
      phoneNumber: string;
      imageUrl?: string;
    } = { email, fullName, phoneNumber };
    // Only upload the image if one is provided
    if (image) {
      const imageUrl = (await uploadImageToCloudinary(image)) as string;
      if (!imageUrl) {
        return { success: false, message: "Failed to upload image" };
      }
      updateData.imageUrl = imageUrl;
    }

    const { data, error } = await supabaseApi
      .from("userprofile")
      .update(updateData)
      .eq("email", email)
      .eq("id", user.data.user.id)
      .select()
      .single();

    if (error) {
      return { success: false, error: "Failed to update profile" };
    }

    revalidatePath("/home");
    return { success: true, data, message: "Profile updated successfully" };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
