import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const {
      error: userError,
      data: { user },
    } = await supabase.auth.getUser();
    const { newPassword } = await req.json();
    console.log(user, newPassword);
    if (userError) {
      throw new Error(userError.message);
    }
    if (user?.id) {
      const { error, data } = await supabase?.auth?.updateUser({
        password: newPassword,
        email: user?.email,
      });

      console.log(data);
      if (error) {
        console.log(error, "update fail");
        throw new Error(error?.message);
      }

      return responsedata({
        success: true,
        message: "Password updated successfully",
        statusCode: 200,
      });
    }
  } catch (error: any) {
    console.log(error, "something");
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
