import { createClient } from "@/lib/supabse/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();
  const userInfo = await supabase?.auth?.getUser();
  try {
    if (userInfo?.error) {
      throw new Error(userInfo?.error?.message);
    }

    if (!userInfo.data?.user?.id) return;
    const { data, error } = await supabase
      .from("userprofile") // Replace with your table name
      .select("*, subscriptions(*), businessProfile(*)") // Or specify columns like 'id, name, etc.'
      .eq("user_id", userInfo.data?.user?.id)
      .single();

    if (error) {
      throw new Error(error?.message);
    }

    // Save tokens in cookies
    const response = NextResponse.json(
      {
        status: "success",
        data,
      },
      { status: 200 }
    );

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}
