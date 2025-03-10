import { errorResponse } from "@/lib/helper/errorResponse";
import { notificationSchema } from "@/lib/Schema/notificationSchema";
import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { verifyUser } from "@/lib/supabse/verifyUser";

export async function POST(req: Request) {
  const supabaseApi = createClient();
  const {
    data: { user },
  } = await supabaseApi?.auth?.getUser();

  try {
    const { user, error } = await verifyUser();
    if (!user && error) return errorResponse(error, 500);
    const body = await req.json();
    const parsedData = notificationSchema.safeParse(body);

    if (!parsedData.success) {
      return errorResponse(parsedData.error.format(), 400);
    }

    const payload = parsedData.data;
    const { data, error: notificationError } = await supabaseApi
      .from("notifications")
      .insert([payload])
      .select()
      .single();

    if (notificationError) {
      return errorResponse(notificationError.message, 400);
    }

    return responsedata({
      message: "Notification Added Successfully",
      data,
      statusCode: 201,
    });
  } catch (error) {
    return errorResponse("Failed to create Notification", 500);
  }
}
// Get notifications
export async function GET() {
  const supabaseApi = createClient();

  try {
    const { user, error } = await verifyUser();
    if (!user && error) return errorResponse(error, 500);
    const { error: notificationError, data } = await supabaseApi
      .from("notifications")
      .select("*")
      .order("updated_at", { ascending: false });

    if (notificationError) {
      return errorResponse(notificationError.message, 400);
    }

    return responsedata({
      message: `Fetch Notification  Data Successfully`,
      data,
      statusCode: 200,
    });
  } catch (error) {
    return errorResponse("Failed to fetch Notification", 500);
  }
}
