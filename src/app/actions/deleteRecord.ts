"use server";

import { checkAppMode } from "@/config";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteRecord = async (recordId: string) => {
  if (!recordId) {
    return {
      success: false,
      error: "No Record Id Found",
    };
  }

  const supabaseApi = createClient();
  const { data: userData, error: userError } =
    await supabaseApi?.auth?.getUser();

  if (userError || !userData?.user?.id) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const userId = userData.user.id;

  // Delete the record from records table
  const { error: deleteError } = await supabaseApi
    .from("records")
    .delete()
    .eq("user_id", userId)
    .eq("id", recordId);

  if (deleteError) {
    return {
      success: false,
      error:
        checkAppMode === "development"
          ? deleteError.message
          : "Something went wrong, Try Again",
    };
  }

  revalidatePath(`/home`);
  redirect("/home");
};
