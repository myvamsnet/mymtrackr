import { UserResponseAPI } from "@/hooks/useGetUser";
import { createClient } from "@/lib/supabse/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();
  const userInfo = await supabase?.auth?.getUser();

  try {
    if (userInfo?.error) {
      throw new Error(userInfo?.error?.message);
    }

    if (!userInfo.data?.user?.id)
      return NextResponse.json({ error: "User not found" }, { status: 400 });

    const { data, error } = await supabase
      .from("userprofile")
      .select("*, subscriptions(*), businessProfile(*)")
      .eq("user_id", userInfo.data?.user?.id)
      .maybeSingle(); // Use maybeSingle() to avoid array wrapping

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        status: "success",
        data,
      } as UserResponseAPI,
      { status: 200 }
    );
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
