import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { newPassword, confirmPassword } = await req.json();

    if (!newPassword && !confirmPassword) {
      throw new Error("Email is required");
    }

    if (user?.id) {
      const { error } = await supabase?.auth?.updateUser({
        password: newPassword,
        email: user?.email,
      });
      if (error) {
        return responsedata({
          success: false,
          message: error?.message,
          statusCode: 400,
        });
      }

      return NextResponse.json({
        status: true,
        message: "Password updated successfully",
      });
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    return NextResponse.json(
      {
        status: false,
        message: errorMessage,
      },
      {
        status: 500,
      }
    );
  }
}
