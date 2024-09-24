import { createClient } from "@/lib/supabse/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { otp } = await req.json();

  const user = await supabase.auth.getUser();
  if (!user?.data?.user?.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const cookieStore = cookies();
  const checkOtpInCokkies = cookieStore.get("otp");
  if (!checkOtpInCokkies) {
    return NextResponse.json({ error: "OTP is not found" }, { status: 400 });
  }

  if (Number(checkOtpInCokkies?.value) !== Number(otp)) {
    return NextResponse.json({ error: "OTP is not valid" }, { status: 400 });
  }

  cookieStore.delete("otp");
  return NextResponse.json(
    {
      message: "OTP is valid",
      status: "success",
    },
    { status: 200 }
  );
}
