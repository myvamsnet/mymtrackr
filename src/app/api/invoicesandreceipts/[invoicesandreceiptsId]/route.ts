import { capitalizeFirstLetter } from "@/lib/helper/capitalizeFirstLetter";
import { Payload } from "./../../../actions/getUser";
import { createClient } from "@/lib/supabse/server";
import { SingleInvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptData } from "@/zustand/invoiceAndReceiptStore";
import { NextResponse } from "next/server";

// Update invoicesandreceipts
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
        type: payload.type,
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
        message: `${
          payload.type === "invoices" ? "Invoice" : "Receipt"
        } Updated Successfully`,
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
// Get invoicesandreceipts By id
export async function GET(
  req: Request,
  { params }: { params: { invoicesandreceiptsId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  try {
    if (!userId)
      return NextResponse.json({ error: "User Not Found" }, { status: 500 });
    const { invoicesandreceiptsId } = params;
    const { error, data } = await supabaseApi
      .from("invoicesandreceipts")
      .select("*")
      .eq("id", invoicesandreceiptsId)
      .eq("user_id", userId)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `Fetch  Data Successfully`,
        data,
      } as SingleInvoicesAndReceiptsResponseData,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch data` },
      { status: 500 }
    );
  }
}
// Delete invoicesandreceipts
export async function DELETE(
  req: Request,
  { params }: { params: { invoicesandreceiptsId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  try {
    if (!userId)
      return NextResponse.json({ error: "User Not Found" }, { status: 500 });
    const { invoicesandreceiptsId } = params;
    const { error } = await supabaseApi
      .from("invoicesandreceipts")
      .delete()
      .eq("id", invoicesandreceiptsId)
      .eq("user_id", userId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `Deleted Successfully`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: `Failed to Delete` }, { status: 500 });
  }
}
