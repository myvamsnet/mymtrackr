import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchInvoiceAndReceiptById(
  invoicesandreceiptsId: string
) {
  const supabaseApi = createClient();
  const { data: userInfo } = await supabaseApi.auth.getUser();
  const userId = userInfo?.user?.id;

  if (!userId) {
    await supabaseApi.auth.signOut();
    return redirect("/");
  }

  const { data, error } = await supabaseApi
    .from("invoicesandreceipts")
    .select("*")
    .eq("id", invoicesandreceiptsId)
    .eq("user_id", userId)
    .single();

  if (error) {
    return {
      success: false,
      message: error?.message,
    };
  }
  revalidatePath(`/invoicesandreceipts/details/${invoicesandreceiptsId}`);
  return { success: true, data } as InvoicesandreceiptResponse;
}

export interface InvoicesandreceiptResponse {
  success: boolean;
  data: InvoicesandreceiptsData;
}
export interface InvoicesandreceiptsData {
  id: string;
  created_at: string;
  issueDate: string;
  dueDate: string;
  customerName: string;
  items: Item[];
  discount: string;
  delivery: string;
  business_id: string;
  user_id: string;
  type: "invoices" | "receipts";
  updated_at: string;
  record_id: string;
}

export interface Item {
  price: string;
  quantity: string;
  description: string;
}
