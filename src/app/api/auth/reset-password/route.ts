import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const { newPassword, confirmPassword, currentPassword } = await req.json();

    // Validate input
    if (!newPassword || !confirmPassword || !currentPassword) {
      return responsedata({
        success: false,
        message: "All fields are required",
        statusCode: 400,
      });
    }

    if (newPassword !== confirmPassword) {
      return responsedata({
        success: false,
        message: "New password and confirm password do not match",
        statusCode: 400,
      });
    }

    // Get the current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user?.id || !user?.email) {
      return responsedata({
        success: false,
        message: userError?.message || "Unable to retrieve user information",
        statusCode: 400,
      });
    }

    // Verify current password
    const { data: isPasswordValid, error: verifyError } = await supabase.rpc(
      "verify_user_password",
      {
        email: user.email,
        password: currentPassword,
      }
    );

    if (verifyError || !isPasswordValid) {
      return responsedata({
        success: false,
        message: "Current password is incorrect",
        statusCode: 400,
      });
    }

    // Update password
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      return responsedata({
        success: false,
        message: updateError.message || "Failed to update password",
        statusCode: 500,
      });
    }

    return responsedata({
      success: true,
      message: "Password updated successfully",
      statusCode: 200,
    });
  } catch (error: any) {
    return responsedata({
      success: false,
      message: error?.message || "Internal server error",
      statusCode: 500,
    });
  }
}
