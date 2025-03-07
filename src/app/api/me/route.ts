import { errorResponse } from "@/lib/helper/errorResponse";
import { createClient } from "@/lib/supabse/server";
import { verifyUser } from "@/lib/supabse/verifyUser";
import { responsedata } from "@/lib/helper/responseData";

export async function GET() {
  const supabase = createClient();

  try {
    const { user, error } = await verifyUser();
    if ((error as string) && !user) {
      return errorResponse(error, 400);
    }

    const { data, error: userprofileError } = await supabase
      .from("userprofile")
      .select("*, subscriptions(*), businessProfile(*)")
      .eq("user_id", user?.id)
      .maybeSingle(); // Use maybeSingle() to avoid array wrapping

    if (error) {
      return errorResponse(userprofileError?.message || "Unknown error", 400);
    }

    return responsedata({
      message: "User verified",
      data,
      statusCode: 200,
    });
  } catch (error) {
    errorResponse("Something went wrong", 500);
  }
}
