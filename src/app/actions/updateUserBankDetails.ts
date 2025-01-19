"use server";

import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const updateUserBankDetails = async (formData: FormData) => {
  const bankName = formData.get("bankName") as string;
  const accountNumber = formData.get("accountNumber") as string;
  const accountName = formData.get("accountName") as string;

  const supabaseApi = createClient();
  const {
    data: { user },
  } = await supabaseApi?.auth?.getUser();

  if (!user?.id) {
    await supabaseApi.auth.signOut();
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  const { data, error } = await supabaseApi
    .from("userprofile")
    .update({
      bankName,
      accountName,
      accountNumber,
    })
    .eq("email", user?.email)
    .eq("id", user?.id)
    .select()
    .single();

  if (error) {
    return { success: false, error: "Failed to Update Account Details" };
  }

  revalidatePath("/home");
  return { success: true, data };
};
export interface accountDetails {
  bankName: string;
  accountNumber: string;
  accountName: string;
}
