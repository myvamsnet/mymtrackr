import { errorResponse } from "@/lib/helper/errorResponse";
import { createClient } from "@/lib/supabse/server";
import { NextResponse } from "next/server";

// DELETE handler to delete a record
export async function DELETE(
  req: Request,
  { params }: { params: { recordId: string } }
) {
  if (!params?.recordId) {
    return errorResponse("No record ID provided.", 400);
  }

  const supabaseApi = createClient();
  const { data: userData, error: userError } = await supabaseApi.auth.getUser();

  if (userError || !userData?.user?.id) {
    console.error("User authentication failed.", userError);
    return errorResponse("Unauthorized access.", 401);
  }

  const userId = userData.user.id;

  try {
    const { data: invoicesAndReceipts, error: fetchError } = await supabaseApi
      .from("invoicesandreceipts")
      .select("id, record_id")
      .eq("record_id", params.recordId)
      .eq("user_id", userId)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Failed to fetch the record.", fetchError);
      return errorResponse("Failed to find the record. Please try again.", 500);
    }

    // Use a transaction for the update and delete operations
    const { error: transactionError } = await supabaseApi.rpc(
      "delete_record_transaction",
      {
        user_id_param: userId,
        record_id_param: params.recordId,
        invoicesandreceiptsid_param: invoicesAndReceipts?.id || null,
      }
    );

    if (transactionError) {
      console.error("Transaction failed.", transactionError);
      return errorResponse(
        "Failed to delete the record. Please try again.",
        500
      );
    }

    return NextResponse.json(
      { success: true, message: "Deleted Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error occurred.", error);
    return errorResponse(
      "An unexpected error occurred. Please try again.",
      500
    );
  }
}
