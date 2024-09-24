import { createClient } from "@/lib/supabse/server";
import { Session } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email, password, fullName } = await req.json();

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    if (data.session?.access_token && data.user?.id) {
      const { error } = await supabase
        .from("usersprofile")
        .insert([
          {
            email,
            fullName,
            user_id: data?.user?.id,
          },
        ])
        .select("*")
        .single();

      if (error) {
        throw new Error(error.message);
      }

      const session = data?.session as Session;

      const responseData = {
        status: "success",
        message: "User created successfully",
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
        maxAge: 60 * 60 * 24 * 30, // 7 days
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
