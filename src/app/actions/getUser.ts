import { createClient } from "@/lib/supabse/server";
import { User } from "@/types/auth";

export async function getUser() {
  const supabase = await createClient();
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

    const data = {
      ...userprofileData,
    } as User;

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
