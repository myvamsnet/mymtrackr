import { createClient } from "@/lib/supabse/server";
import { User } from "@/types/auth";
import { revalidatePath } from "next/cache";

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.id) {
    const { data: userprofileData, error: userprofileError } = await supabase
      .from("userprofile")
      .select("*, subscriptions(*), businessProfile(*)") // Or specify columns like 'id, name, etc.'
      .eq("id", user.id)
      .single();

    if (userprofileError) {
      return {
        success: false,
        message: "User Profile Fetch Failed",
      };
    }

    revalidatePath("/home");
    return {
      success: true,
      data: userprofileData as User,
    } as UserResponseData;
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

export interface UserResponseData {
  success: boolean;
  message?: string;
  data?: User;
}
