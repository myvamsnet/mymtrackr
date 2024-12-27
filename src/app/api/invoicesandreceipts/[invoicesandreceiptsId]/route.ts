import { capitalizeFirstLetter } from "@/lib/helper/capitalizeFirstLetter";
import { Payload } from "./../../../actions/getUser";
import { createClient } from "@/lib/supabse/server";
import { SingleInvoicesAndReceiptsResponseData } from "@/types/invoicesandreceipts";
import { InvoiceAndReceiptData } from "@/zustand/invoiceAndReceiptStore";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { invoicesandreceiptsId: string } }
) {
  const supabaseApi = createClient(); // Initialize Supabase client
  const userInfo = await supabaseApi?.auth?.getUser(); // Get authenticated user
  const userId = userInfo?.data?.user?.id; // Extract user ID
  const payload: Partial<InvoiceAndReceiptData> = await req.json(); // Parse request body

  try {
    // Check if the user is authenticated
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { invoicesandreceiptsId } = params;

    // If `recordId` exists, update the `records` table first
    if (payload?.recordId) {
      const { error: recordError } = await supabaseApi
        .from("records")
        .update({ type: payload.type === "invoices" ? "debtor" : "income" })
        .eq("id", payload.recordId)
        .eq("user_id", userId);

      // If updating `records` fails, stop the operation and return an error
      if (recordError) {
        return NextResponse.json(
          { error: `Failed to update records: ${recordError.message}` },
          { status: 400 }
        );
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
      .select("*")
      .single();

    // If updating `invoicesandreceipts` fails, return an error
    if (invoiceError) {
      return NextResponse.json(
        {
          error: `Failed to update invoices/receipts: ${invoiceError.message}`,
        },
        { status: 400 }
      );
    }

    // If both updates succeed, return a success response
    return NextResponse.json(
      {
        success: true,
        message: `${
          payload.type === "invoices" ? "Invoice" : "Receipt"
        } Updated Successfully`,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle unexpected errors
    return NextResponse.json(
      { error: `Failed to update ${payload.type}: ${(error as any).message}` },
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
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
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
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
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
