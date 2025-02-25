import { createClient } from "@/lib/supabse/server";
import { revalidatePath } from "next/cache";

export const getRecordsById = async (id: string) => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  try {
    const { data, error } = await supabaseApi
      .from("records")
      .select("*")
      .eq("user_id", user?.data?.user?.id)
      .eq("id", id)
      .single();

    if (error) {
      return {
        success: false,
        error: "Something went wrong, Try Again",
      };
    }
    revalidatePath(`/records/details/${id}`);
    return { data, error };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "Something went wrong" };
    }
  }
};
