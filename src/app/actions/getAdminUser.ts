import { createClient } from "@/lib/supabse/server";
import { redirect } from "next/navigation";

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

export async function getAdminUser(): Promise<Payload> {
  const supabase = createClient();

  // Fetch the authenticated user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return {
      success: false,
      message: "User not authenticated",
    };
  }

  // Fetch the user's profile
  const { data: userprofileData, error: userprofileError } = await supabase
    .from("userprofile")
    .select("*")
    .eq("id", user.id)
    .single();

  if (userprofileError) {
    return {
      success: false,
      message: "Failed to fetch user profile",
    };
  }

  // Check if the user has the 'admin' role
  if (userprofileData?.role !== "admin") {
    const { error: signOutError } = await supabase.auth.signOut();

    if (signOutError) {
      return {
        success: false,
        message: "An error occurred while signing out. Please try again later.",
      };
    }

    redirect("/login");
    return {
      success: false,
      message: "Unauthorized access",
    };
  }

  // Return the user profile as admin
  const data: userprofile = {
    id: userprofileData.id,
    email: userprofileData.email,
    fullName: userprofileData.fullName,
    imageUrl: userprofileData.imageUrl,
    phoneNumber: userprofileData.phoneNumber,
    referralCode: userprofileData.referralCode,
    role: userprofileData.role,
  };

  return {
    success: true,
    data,
  };
}
