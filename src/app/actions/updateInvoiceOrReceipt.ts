"use server";

import { createClient } from "@/lib/supabse/server";
import { InvoiceAndReceiptData } from "@/zustand/invoiceAndReceiptStore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateInvoiceOrReceipt(
  invoicesandreceiptsId: string,
  payload: Partial<InvoiceAndReceiptData>
) {
  const supabaseApi = createClient(); // Initialize Supabase client
  const userInfo = await supabaseApi.auth.getUser(); // Get authenticated user
  const userId = userInfo?.data?.user?.id; // Extract user ID

  try {
    // Check if the user is authenticated
    if (!userId) {
      return {
        error: `Unauthorized User`,
        success: false,
      };
    }

    // If `recordId` exists, update the `records` table first
    if (payload?.recordId) {
      const { error: recordError } = await supabaseApi.rpc("update_records", {
        p_record_id: payload.recordId,
        p_user_id: userId,
        p_type: payload.type,
      });
      if (recordError) {
        return {
          error: `Failed to update records: ${recordError.message}`,
          success: false,
        };
      }
    }

    // Update the `invoicesandreceipts` table
    const { error: invoiceError, data } = await supabaseApi
      .from("invoicesandreceipts")
      .update({
        customerName: payload?.customerName,
        issueDate: payload?.issueDate,
        dueDate: payload?.dueDate,
        discount: payload?.discount,
        delivery: payload?.delivery,
        items: payload?.items,
        type: payload.type,
      })
      .eq("id", invoicesandreceiptsId)
      .eq("user_id", userId)
      .select("id, type")
      .single();

    if (invoiceError) {
      return {
        error: `Failed to update invoices/receipts: ${invoiceError.message}`,
        success: false,
      };
    }
    revalidatePath(`/invoicesandreceipts/details/${invoicesandreceiptsId}`);
    return {
      success: true,
      message: `${
        payload.type === "invoices" ? "Invoice" : "Receipt"
      } Updated Successfully`,
      data,
    };
  } catch (error) {
    return {
      error: `Failed to update ${payload.type}: ${(error as any).message}`,
      success: false,
    };
  }
}
