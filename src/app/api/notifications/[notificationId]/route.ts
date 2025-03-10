import { responsedata } from "@/lib/helper/responseData";
import { errorResponse } from "@/lib/helper/errorResponse";
import { NotificationSchemaType } from "@/lib/Schema/notificationSchema";
import { createClient } from "@/lib/supabse/server";
import { verifyUser } from "@/lib/supabse/verifyUser";
import { NextRequest } from "next/server";

// Update Business Account
export async function PUT(
  req: NextRequest,
  { params }: { params: { notificationId: string } }
) {
  const supabaseApi = createClient();

  try {
    const { user, error } = await verifyUser();
    if (!user && error) return errorResponse(error, 500);
    const payload: Partial<NotificationSchemaType> = await req.json();
    const { notificationId } = params;

    const { error: notificationsError, data } = await supabaseApi
      .from("notifications")
      .update(payload)
      .eq("id", notificationId)
      .select()
      .single();

    if (notificationsError) {
      return errorResponse(notificationsError.message, 500);
    }
    return responsedata({
      message: "Notification Updated Successfully",
      data,
      statusCode: 200,
    });
  } catch (error) {
    return errorResponse("Failed to update notification", 500);
  }
}

// Get notifications By id
export async function GET(
  req: NextRequest,
  { params }: { params: { notificationId: string } }
) {
  const supabaseApi = createClient();

  try {
    const { user, error } = await verifyUser();
    if (!user && error) return errorResponse(error, 500);
    const { notificationId } = params;
    const { error: notificationError, data } = await supabaseApi
      .from("notifications")
      .select("*")
      .eq("id", notificationId)
      .single();

    if (notificationError) {
      return errorResponse(notificationError.message, 400);
    }
    return responsedata({
      message: `Fetch  Data Successfully`,
      data,
      statusCode: 200,
    });
  } catch (error) {
    return errorResponse(`Failed to fetch  notification`, 500);
  }
}
// Delete notifications by id
export async function DELETE(
  req: Request,
  { params }: { params: { notificationId: string } }
) {
  const supabaseApi = createClient();

  try {
    const { user, error } = await verifyUser();

    if (!user && error) return errorResponse(error, 500);
    const { notificationId } = params;
    const { error: notificationError } = await supabaseApi
      .from("notifications")
      .delete()
      .eq("id", notificationId);

    if (notificationError) {
      return errorResponse(notificationError?.message, 400);
    }
    return responsedata({
      message: `Deleted Successfully`,
      data: {
        id: notificationId,
      },
      statusCode: 200,
    });
  } catch (error) {
    return errorResponse(`Failed to Delete`, 500);
  }
}
