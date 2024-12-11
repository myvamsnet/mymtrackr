import { createClient } from "@/lib/supabse/server";
import { Data } from "@/types/invoicesandreceipts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getInvoicesAndReceiptsById = async (id: string) => {
  const supabaseApi = createClient();
  const user = await supabaseApi?.auth?.getUser();
  const userId = user?.data?.user?.id;
  try {
    if (!userId) {
      await supabaseApi.auth.signOut();
      redirect("/login");
    }
    const { data, error } = await supabaseApi
      .from("invoicesandreceipts")
      .select("*")
      .eq("user_id", user?.data?.user?.id)
      .eq("id", id)
      .single();

    if (error) {
      return {
        success: false,
        error: "Something went wrong, Try Again",
        data: null,
      };
    }
    revalidatePath(`/invoicesandreceipts/details/${id}`);
    return { data, error } as {
      data: Data;
      error: null;
      success: true;
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "Something went wrong" };
    }
  }
};
