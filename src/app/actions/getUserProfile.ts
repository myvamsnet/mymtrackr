"use server";
import { createClient } from "@/lib/supabse/server";

export const getUserProfile = async () => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  const { data, error } = await supabaseApi
    .from("usersprofile") // Replace with your table name
    .select("*") // Or specify columns like 'id, name, etc.'
    .eq("user_id", user?.data?.user?.id)
    .single();

  return { data, error };
};
