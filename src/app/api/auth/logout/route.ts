import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";

export async function POST() {
  const supabase = createClient();

  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    const response = NextResponse.json(
      { message: "Logged out successfully", status: "success" },
      { status: 200 }
    );

    // Clear cookies
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Somethings went wrong" },
      { status: 400 }
    );
  }
}
