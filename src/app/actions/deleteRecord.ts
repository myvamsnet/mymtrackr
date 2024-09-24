"use server";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteRecord = async (recordId: string) => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  try {
    if (!recordId)
      return {
        success: false,
        error: "No Record Id Found",
      };
    const { error } = await supabaseApi
      .from("records")
      .delete()
      .eq("user_id", user?.data?.user?.id)
      .eq("id", recordId);
    if (error) {
    }

    if (error) {
      return {
        success: false,
        error: "Something went wrong, Try Again",
      };
    }
    revalidatePath(`/home`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "Something went wrong" };
    }
  } finally {
    redirect("/home");
  }
};
