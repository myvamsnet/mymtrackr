import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextRequest, NextResponse } from "next/server";

// Get All Content
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const supabaseApi = createClient();
  const { searchParams } = new URL(req.url);
  const userInfo = await supabaseApi?.auth?.getUser();
  const user_id = userInfo?.data?.user?.id;
  const pageParam = parseInt(searchParams.get("page") || "1"); // Default to page 1
  const searchTerm = searchParams.get("searchTerm");
  const status = searchParams.get("status");

  const pageSize = 10; // The number of records per page

  if (!user_id || !params.userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
  }

  try {
    // Build the base query
    let baseQuery = supabaseApi
      .from("referrals")
      .select(
        `
        referee:userprofile!referrals_refereeId_fkey (subscriptions(status), fullName, email, id, phoneNumber, last_active, created_at, imageUrl)
      `,
        { count: "exact" }
      )
      .eq("referrerId", params?.userId);

    // Apply filters if provided
    if (status) {
      baseQuery = baseQuery.contains("referee.subscriptions", [{ status }]);
    }
    if (searchTerm) {
      const trimmedSearchTerm = searchTerm.trim();
      baseQuery = baseQuery.ilike("referee.fullName", `%${trimmedSearchTerm}%`);
    }

    // Get filtered count and total data
    const { count: filteredCount, error: countError } = await baseQuery;
    if (countError) {
      console.error("Error fetching filtered count:", countError.message);
      return NextResponse.json({ error: countError.message }, { status: 400 });
    }

    // Calculate total pages
    const totalPages = filteredCount ? Math.ceil(filteredCount / pageSize) : 0;

    // Ensure the requested page is within bounds
    if (pageParam > totalPages || pageParam < 1) {
      return responsedata({
        success: true,
        data: { users: [], totalPages, page: pageParam },
        message: "No users found on this page",
        statusCode: 200,
      });
    }

    // Apply pagination
    const { data, error } = await baseQuery.range(
      (pageParam - 1) * pageSize,
      pageParam * pageSize - 1
    );

    if (error) {
      console.error("Error fetching data:", error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const userData = {
      users: data || [],
      totalPages,
      page: pageParam, // Return the current page as 1-indexed
    };

    return responsedata({
      success: true,
      data: userData,
      message: "Users fetched successfully",
      statusCode: 201,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to get users" }, { status: 500 });
  }
}
