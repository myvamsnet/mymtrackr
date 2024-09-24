import { createClient } from "@/lib/supabse/server";
import { Session } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email, password } = await req.json();

  try {
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide email and password" },
        { status: 400 }
      );
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const session = data?.session as Session;

    if (error) {
      throw new Error(error.message);
    }

    if (data?.session?.access_token && data?.user?.id) {
      const { error } = await supabase
        .from("usersprofile")
        .select("*")
        .eq("user_id", data?.user?.id)
        .single();

      if (error)
        throw new Error(
          error?.message || "An error occurred while fetching user information"
        );

      const responseData = {
        status: "success",
        message: "User signed in successfully",
        data: {
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        },
      };

      // Save tokens in cookies
      const response = NextResponse.json(responseData, { status: 200 });

      response.cookies.set("access_token", session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      response.cookies.set("refresh_token", session.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      return response;
    }
  } catch (error: unknown) {
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
