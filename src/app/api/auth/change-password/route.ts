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
   
    if (userError) {
      throw new Error(userError.message);
    }
    if (user?.id) {
      const { error, data } = await supabase?.auth?.updateUser({
        password: newPassword,
        email: user?.email,
      });

 
      if (error) {

        throw new Error(error?.message);
      }

      return responsedata({
        success: true,
        message: "Password updated successfully",
        statusCode: 200,
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
