import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const getContents = async () => {
  const supabaseApi = createClient();
  let { data: contents, error } = await supabaseApi
    .from("contents")
    .select("*");

  if (error) {
    return { data: null, message: "Failed to fetch contents", success: false };
  }
  revalidatePath("/help");
  return {
    contents,
    success: true,
  };
};
