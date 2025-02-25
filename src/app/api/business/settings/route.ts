import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";
import { BusinessSettingFormData } from "@/lib/Schema/businessSchema";
import { BusinessResponseData } from "@/types/business";
import { responsedata } from "@/lib/helper/responseData";

// Create Business Account
export async function POST(req: NextRequest) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  try {
    if (!userInfo?.data?.user?.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });

    const payload: BusinessSettingFormData = await req.json();

    const create = {
      user_id: userInfo?.data?.user?.id,
      ...payload,
    } as Payload;
    const { data, error } = await supabaseApi
      .from("businessProfile")
      .insert([create])
      .select("*")
      .single();

    if (error && error.code === "23505") {
      return NextResponse.json(
        { error: "Business Details already exist" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        data,
      } as BusinessResponseData,
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return responsedata({
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? errorMessage
          : "Failed to create Business Account",
      statusCode: 500,
    });
  }
}

// Fetch Business Account
export async function GET() {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  try {
    if (!userInfo?.data?.user?.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
    const { data, error } = await supabaseApi
      .from("businessProfile")
      .select("*")
      .eq("user_id", userInfo?.data?.user?.id)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(
      {
        success: true,
        data,
      } as BusinessResponseData,
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = (error as Error).message;
    return responsedata({
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? errorMessage
          : "Failed to fetch business Acouunt",
      statusCode: 500,
    });
  }
}

interface User {
  user_id: string;
}
type Payload = BusinessSettingFormData & User;
