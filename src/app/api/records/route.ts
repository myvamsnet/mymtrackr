import { createClient } from "@/lib/supabse/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const supabaseApi = createClient();
  const { searchParams } = new URL(req.url);
  const userInfo = await supabaseApi?.auth?.getUser();
  const user_id = userInfo?.data?.user?.id;
  const pageParam = parseInt(searchParams.get("pageParam") || "0");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const searchTerm = searchParams.get("searchTerm");
  if (!userInfo?.data?.user?.id) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  try {
    // Build the initial query
    let query = supabaseApi
      .from("records")
      .select("*")
      .eq("user_id", user_id)
      .order("updated_at", { ascending: false });

    if (pageParam) {
      query = query.range(pageParam, pageParam + 10);
    }

    // Apply date filters if present
    if (
      startDate &&
      startDate !== "Invalid Date" &&
      startDate !== "" &&
      startDate !== "null" &&
      endDate &&
      endDate !== "Invalid Date" &&
      endDate !== "" &&
      endDate !== "null"
    ) {
      query = query.gte("created_at", startDate).lte("created_at", endDate);
    }

    // Apply search term filters
    if (
      searchTerm &&
      searchTerm !== "" &&
      searchTerm !== "undefined" &&
      searchTerm !== "null" &&
      searchTerm !== "NaN"
    ) {
      const numericSearchTerm = Number(searchTerm);
      if (!isNaN(numericSearchTerm)) {
        // If searchTerm is a valid number, search by amount
        query = query.eq("amount", numericSearchTerm);
      } else if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
        // If searchTerm is a string, search by name using ilike
        const trimmedSearchTerm = searchTerm.trim();
        query = query.ilike("name", `%${trimmedSearchTerm}%`);
      }
    }

    // Execute the query and handle response
    const { data, error } = await query;
    if (error) {
      console.error("Query error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        success: true,
        data,
        message: "Records fetched successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Failed to get records" },
      { status: 500 }
    );
  }
}
