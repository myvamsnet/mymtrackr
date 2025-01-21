import { responsedata } from "@/lib/helper/responseData";
import { createClient } from "@/lib/supabse/server";
import { NextRequest, NextResponse } from "next/server";

// Get All Content
export async function GET(req: NextRequest) {
  const supabaseApi = createClient();
  const { searchParams } = new URL(req.url);
  const userInfo = await supabaseApi?.auth?.getUser();
  const user_id = userInfo?.data?.user?.id;
  const pageParam = parseInt(searchParams.get("pageParam") || "1"); // Default to page 1
  const status = searchParams.get("status");

  const pageSize = 10; // The number of records per page

  if (!user_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
  }

  try {
    // Build the initial query with filters
    let query = supabaseApi
      .from("referrals")
      .select(
        "status, amount,updated_at, referee:userprofile!referrals_referee_id_fkey (fullName, id)",
        {
          count: "exact", // Ensure total count is returned
        }
      )
      .order("created_at", { ascending: false })
      .eq("referrer_id", user_id);

    if (status) {
      // If status is related to subscriptions, filter on the "subscriptions" table
      query = query.eq("status", status);
    }

    // Get total count of filtered results for pagination
    const { count: filteredCount, error: countError } = await query;

    if (countError) {
      return NextResponse.json({ error: countError.message }, { status: 400 });
    }

    // Calculate total pages based on the filtered count
    const totalPages = filteredCount ? Math.ceil(filteredCount / pageSize) : 0;

    // Ensure page is within bounds
    if (pageParam > totalPages) {
      return responsedata({
        success: true,
        data: { users: [], totalPages, page: pageParam },
        message: "No referrals found on this page",
        statusCode: 200,
      });
    }

    // Apply pagination to the query
    query = query.range((pageParam - 1) * pageSize, pageParam * pageSize - 1);

    // Execute the query
    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const referralsData = {
      referrals: data,
      totalPages,
      page: pageParam, // Return the current page as 1-indexed
    };
    console.log(referralsData);
    return responsedata({
      success: true,
      data: referralsData,
      message: "referrals fetched successfully",
      statusCode: 201,
    });
  } catch (error) {
    console.error("Error fetching referrals:", error);
    return NextResponse.json(
      { error: "Failed to get referrals" },
      { status: 500 }
    );
  }
}
