import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";
import { responsedata } from "@/lib/helper/responseData";

export async function POST(req: NextResponse) {
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
  } catch {
    return NextResponse.json(
      { error: "Failed to create content" },
      { status: 500 }
    );
  }
}

// Get All Content
export async function GET() {
  const supabaseApi = createClient();
  const {
    data: { user },
  } = await supabaseApi?.auth?.getUser();

  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
  }
  try {
    // Build the initial query
    const query = supabaseApi
      .from("contents")
      .select("*")
      .order("created_at", { ascending: false })
      .range(0, 9);
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
    const err = error as Error;
    return NextResponse.json(
      { error: `Failed to get content: ${err.message}` },
      { status: 500 }
    );
  }
}

export interface Payload {
  title: string;
  link: string;
}
