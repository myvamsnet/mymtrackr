import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const { newPassword } = await req.json();

    // Update the user's password
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      return responsedata({
        success: false,
        message: updateError.message || "Failed to update password",
        statusCode: 401,
      });
    }

    return responsedata({
      success: true,
      message: "Password updated successfully",
      statusCode: 200,
    });
  } catch (error) {
    return responsedata({
      success: true,
      message: (error as any)?.message || "An unexpected error occurred",
      statusCode: 500,
    });
  }
}
