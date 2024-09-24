import { createClient } from "@/lib/supabse/client";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { newPassword, confirmPassword } = (await req.json()) as Payload;

  if (newPassword !== confirmPassword) {
    return NextResponse.json(
      { error: "Passwords do not match" },
      { status: 404 }
    );
  }
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    console.log(error);
    if (error) {
      throw new Error(error.message);
    }

    const responseData = {
      status: "success",
      message: "Password Changed Successfully",
    };

    // Save tokens in cookies
    const response = NextResponse.json(responseData, { status: 200 });
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}
interface Payload {
  newPassword: string;
  confirmPassword: string;
}
