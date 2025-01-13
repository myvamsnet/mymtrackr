import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data: userprofileData, error: userprofileError } = await supabase
      .from("userprofile")
      .select("*")
      .eq("id", user.id)
      .single();

    if (userprofileError) {
      return {
        success: false,
        message: "User Profile Fetch Failed",
      };
    }

    const data: userprofile = {
      id: userprofileData.id,
      email: userprofileData.email,
      fullName: userprofileData.fullName,
      imageUrl: userprofileData.imageUrl,
      phoneNumber: userprofileData.phoneNumber,
      referralCode: userprofileData.referralCode,
      role: userprofileData?.role,
    };

    revalidatePath("/home");
    return {
      success: true,
      data,
    } as Payload;
  }
}
export interface userprofile {
  id: string;
  email: string;
  fullName: string;
  imageUrl: string;
  phoneNumber: string;
  referralCode: string;
  role: "admin" | "user";
}

export interface Payload {
  success: boolean;
  message?: string;
  data?: userprofile;
}
