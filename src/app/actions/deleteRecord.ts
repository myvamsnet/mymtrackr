"use server";

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

  // Fetch the record from invoicesandreceipts
  const { data: invoicesandreceiptsData, error: invoicesError } =
    await supabaseApi
      .from("invoicesandreceipts")
      .select("id, record_id")
      .eq("record_id", recordId)
      .eq("user_id", userId)
      .single();

  if (invoicesError && !invoicesandreceiptsData) {
    return {
      success: false,
      error: "Something went wrong, Try Again",
    };
  }

  // Update record_id in invoicesandreceipts if it exists
  if (invoicesandreceiptsData?.record_id) {
    const { error: updateError } = await supabaseApi
      .from("invoicesandreceipts")
      .update({ record_id: null })
      .eq("id", invoicesandreceiptsData.id)
      .eq("user_id", userId);

    if (updateError) {
      return {
        success: false,
        error: "Failed to update related records. Try Again.",
      };
    }
  }

  // Delete the record from records table
  const { error: deleteError } = await supabaseApi
    .from("records")
    .delete()
    .eq("user_id", userId)
    .eq("id", recordId);

  if (deleteError) {
    return {
      success: false,
      error: "Something went wrong, Try Again",
    };
  }

  revalidatePath(`/home`);
  redirect("/home");
};
