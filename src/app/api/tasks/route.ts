import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";
import { TaskResponseData } from "@/types/tasks";

export async function POST(req: Request) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  try {
    const userId = userInfo?.data?.user?.id;
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const payload = await req.json();
    const create = {
      ...payload,
      user_id: userId,
    } as payload;
    const { data, error } = await supabaseApi
      .from("tasks")
      .insert([create])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create record" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const supabaseApi = createClient();
  const { searchParams } = new URL(req.url);

  // Get user information from Supabase
  const userInfo = await supabaseApi?.auth?.getUser();
  const user_id = userInfo?.data?.user?.id;

  if (!user_id) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  // Get query parameters
  const status = searchParams.get("status");

  const searchTerm = searchParams.get("searchTerm");

  try {
    // Build the initial query
    let query = supabaseApi
      .from("tasks")
      .select("*")
      .eq("status", status)
      .eq("user_id", user_id)
      .order("updated_at", { ascending: false });

    // Apply search term filters
    if (
      searchTerm &&
      searchTerm !== "" &&
      searchTerm !== "undefined" &&
      searchTerm !== "null" &&
      searchTerm !== "NaN"
    ) {
      // If searchTerm is a string, search by name using ilike
      const trimmedSearchTerm = searchTerm.trim();
      query = query.ilike("title", `%${trimmedSearchTerm}%`);
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
        message: "Tasks fetched successfully",
        data,
      } as unknown as TaskResponseData,
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Failed to get tasks" }, { status: 500 });
  }
}

interface payload {
  taskDate: string;
  title: string;
  status: boolean;
  user_id: string;
}
