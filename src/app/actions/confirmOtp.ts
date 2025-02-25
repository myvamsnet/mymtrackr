"use server";
import { cookies } from "next/headers";
import { z } from "zod";

export const confirmOtp = async (formData: FormData) => {
  const FormSchema = z.object({
    otp: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });

  const result = FormSchema.safeParse({
    otp: formData.get("otp"),
  });
  if (!result.success) {
    return { success: false, error: result.error.flatten() };
  }
  const cookieStore = await cookies();
  const checkOtpInCokkies = cookieStore.get("otp");
  if (!checkOtpInCokkies) {
    return { success: false, error: "OTP is not found" };
  }

  if (Number(checkOtpInCokkies?.value) === Number(result?.data?.otp)) {
    cookieStore.delete("otp");
    return { success: true };
  }
};
