import { ResetPasswordEmail } from "@/app/(protectedRoute)/_components/email/ResetPasswordEmail";
import { createClient } from "@/lib/supabse/server";
import { Resend } from "resend";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  function generateOTP(): string {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
  }

  if (!userInfo?.data?.user?.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const email = userInfo?.data?.user?.email;
  const otp = generateOTP();
  console.log("OTP: ", otp, email);
  try {
    const { error } = await resend.emails.send({
      from: "MYVAMSNET <info@myvamsnet.com>",
      to: [email as string],
      subject: "Reset Password OTP",
      react: ResetPasswordEmail({ otp: Number(otp) }),
    });

    if (error) {
      console.log("Error: ", error);
      return Response.json({ error }, { status: 500 });
    }

    // Save tokens in cookies
    const response = NextResponse.json(
      {
        message: "OTP sent successfully",
        status: "success",
      },
      { status: 200 }
    );

    response.cookies.set("otp", otp, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 30, // 7 days
      path: "/",
    });
    return response;
  } catch (error) {
    console.log("Error: ", error);
    return Response.json({ error }, { status: 500 });
  }
}
