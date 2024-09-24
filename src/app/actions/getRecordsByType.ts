"use server";
import { Type } from "@/lib/helper/handleTypeColor";
import { createClient } from "@/lib/supabse/server";

export const getDataByType = async (
  type: Type,
  startDate?: string | null,
  endDate?: string | null,
  searchTerm?: string | number | null
) => {
  if (!type) return;

  const supabaseApi = createClient();
  const { data: user, error: userError } = await supabaseApi.auth.getUser();

  if (userError || !user?.user?.id) {
    console.error("User authentication failed:", userError);
    return { data: null, error: "User not authenticated" };
  }

  let query = supabaseApi
    .from("records")
    .select("*")
    .eq("type", type)
    .eq("user_id", user.user.id)
    .order("updateat", { ascending: false });

  // Apply date filters
  const today = new Date().toISOString();
  if (startDate) {
    query = query.gte("createdAt", startDate);
  }

  if (endDate) {
    query = query.lte("createdAt", endDate);
  }
  // Apply search term filter
  if (searchTerm) {
    const searchStr = searchTerm.toString().trim();
    if (isNaN(Number(searchTerm))) {
      query = query.ilike("name", `%${searchStr}%`);
    } else {
      query = query.eq("amount", Number(searchTerm));
    }
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching records:", error);
  }

  return { data, error };
};
