import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextResponse } from "next/server";

// Delete contents
export async function DELETE(
  req: Request,
  { params }: { params: { contentId: string } }
) {
  const supabaseApi = createClient();

  // Fetch user info
  const { data: userInfo, error: userError } = await supabaseApi.auth.getUser();
  if (userError || !userInfo?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = userInfo.user.id;
  const { contentId } = params;

  try {
    // Delete content from the database
    const { error } = await supabaseApi
      .from("contents")
      .delete()
      .eq("id", contentId)
      .eq("user_id", userId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Respond with success
    return responsedata({
      success: true,
      message: "Content Deleted Successfully",
      statusCode: 200,
    });
  } catch (error) {
    console.error("Error deleting content:", error);
    return NextResponse.json(
      { error: "Failed to delete content" },
      { status: 500 }
    );
  }
}
