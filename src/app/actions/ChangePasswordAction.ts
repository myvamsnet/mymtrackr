"use server";
import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";
import { permanentRedirect } from "next/navigation";

export const ChangePasswordAction = async (formData: FormData) => {
  const newPassword = formData.get("newPassword") as string;
  const confirmPassword = formData.get("confirmPassword");

  if (newPassword !== confirmPassword) {
    return {
      error: "Passwords do not match",
      success: false,
    };
  }

  try {
    const supabase = createClient();
    const { error, data: UpdatedUser } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      return {
        error: (error as Error).message,
        success: false,
      };
    }

    revalidatePath("/home");
    return {
      success: true,
      data: UpdatedUser,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  } finally {
    permanentRedirect("/home");
  }
};
