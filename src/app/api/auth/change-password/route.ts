import { createClient } from "@/lib/supabse/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const {
      error: userError,
      data: { user },
    } = await supabase.auth.getUser();
    const { newPassword, confirmPassword } = await req.json();

    if (!newPassword && !confirmPassword) {
      throw new Error("Email is required");
    }

    if (user?.id) {
      const { data, error } = await supabase?.auth?.updateUser({
        password: newPassword,
        email: user?.email,
      });
      if (error) {
        throw new Error(error?.message);
      }

      return NextResponse.json({
        status: "success",
        message: "Password updated successfully",
      });
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "failed",
        message: error?.mesaage,
      },
      {
        status: 500,
      }
    );
  }
}
