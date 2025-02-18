import { createClient } from "@/lib/supabse/server";
import { BusinessData } from "@/types/business";

export async function getUserBusiness() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user?.id) {
    let { data: businessProfile, error: businessProfileError } = await supabase
      .from("businessProfile")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (businessProfileError) {
      return {
        success: false,
        message: "User Business Profile Fetch Failed",
      };
    }

    const data = {
      ...businessProfile,
    } as BusinessData;

    return {
      success: true,
      data,
    } as BusinessProfilePayload;
  }
}

export async function getUserBusinessById(id: string) {
  const supabase = createClient();

  if (!id) return;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user?.id) {
    let { data: businessProfile, error: businessProfileError } = await supabase
      .from("businessProfile")
      .select("*")
      .eq("user_id", user.id)
      .eq("id", id)
      .single();

    if (businessProfileError) {
      return {
        success: false,
        message: "User Business Profile Fetch Failed",
      };
    }

    const data = {
      ...businessProfile,
    } as BusinessData;

    return {
      success: true,
      data,
    } as BusinessProfilePayload;
  }
}

export interface BusinessProfilePayload {
  success: boolean;
  message?: string;
  data?: BusinessData;
}
