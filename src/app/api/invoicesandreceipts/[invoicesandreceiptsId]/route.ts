import { Payload } from "./../../../actions/getUser";
import { createClient } from "@/lib/supabse/server";
import { SingleInvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptData } from "@/zustand/invoiceAndReceiptStore";
import { NextResponse } from "next/server";

// Update Business Account
export async function PUT(
  req: Request,
  { params }: { params: { invoicesandreceiptsId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  const payload: Partial<InvoiceAndReceiptData> = await req.json();
  try {
    if (!userId)
      return NextResponse.json({ error: "User Not Found" }, { status: 500 });
    const { invoicesandreceiptsId } = params;
    const { error, data } = await supabaseApi
      .from("invoicesandreceipts")
      .update({
        customerName: payload?.customerName,
        issueDate: payload?.issueDate,
        dueDate: payload?.dueDate,
        discount: payload?.discount,
        delivery: payload?.delivery,
        items: payload?.items,
      })
      .eq("id", invoicesandreceiptsId)
      .eq("user_id", userId)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `${payload.type} Updated Successfully`,
        data,
      } as SingleInvoicesAndReceiptsResponseData,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to update ${payload.type}` },
      { status: 500 }
    );
  }
}
