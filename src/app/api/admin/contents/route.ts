import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";
import { responsedata } from "@/lib/helper/responseData";

export async function POST(req: Request) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  try {
    const payload: Payload = await req.json();
    const create = {
      user_id: userInfo?.data?.user?.id,
      ...payload,
    };
    const { data, error } = await supabaseApi
      .from("contents")
      .insert([create])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return responsedata({
      success: true,
      message: "Content Added Successfully",
      data,
      statusCode: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create content" },
      { status: 500 }
    );
  }
}

// Get All Content
export async function GET(req: NextRequest) {
  const supabaseApi = createClient();
  const { searchParams } = new URL(req.url);
  const userInfo = await supabaseApi?.auth?.getUser();
  const user_id = userInfo?.data?.user?.id;
  const pageParam = parseInt(searchParams.get("pageParam") || "0");
  const searchTerm = searchParams.get("searchTerm");
  if (!user_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
  }
  try {
    // Build the initial query
    let query = supabaseApi
      .from("contents")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false })
      .range(0, 9);

    if (pageParam) {
      query = query.range(pageParam, pageParam + 10);
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
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return responsedata({
      success: true,
      data,
      message: "Content fetched successfully",
      statusCode: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get content" },
      { status: 500 }
    );
  }
}

export interface Payload {
  title: string;
  link: string;
}
