import { BusinessSettingFormData } from "@/lib/Schema/businessSchema";
import { createClient } from "@/lib/supabse/server";
import { BusinessResponseData } from "@/types/business";
import { NextResponse } from "next/server";

// Update Business Account
export async function PUT(
  req: Request,
  { params }: { params: { businessId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  try {
    if (!userId)
      return NextResponse.json({ error: "User Not Found" }, { status: 500 });

    const payload: Partial<BusinessSettingFormData> = await req.json();
    const { businessId } = params;

    const create = {
      user_id: userId,
      ...payload,
    };
    const { error } = await supabaseApi
      .from("businessProfile")
      .update({
        businessName: payload.businessName,
        businessEmail: payload.businessEmail,
        phoneNumber1: payload.phoneNumber1,
        phoneNumber2: payload.phoneNumber2,
        bankName: payload.bankName,
        accountName: payload.accountName,
        accountNumber: payload.accountNumber,
        termsOfService: payload.termsOfService,
        brandColor: payload.brandColor,
        imageUrl: payload.imageUrl,
      })
      .eq("id", businessId)
      .eq("user_id", userId)
      .select();

    if (error && error.code === "23505") {
      return NextResponse.json(
        { error: "Business Details already exist" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Business Account Updated Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create Business Account" },
      { status: 500 }
    );
  }
}

// Fetch Business Account
export async function GET(
  req: Request,
  { params }: { params: { businessId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  try {
    if (!userInfo?.data?.user?.id)
      return NextResponse.json({ error: "User Not Found" }, { status: 500 });
    const { data, error } = await supabaseApi
      .from("businessProfile")
      .select("*")
      .eq("user_id", userInfo?.data?.user?.id)
      .eq("id", params.businessId)
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
    return NextResponse.json(
      { error: "Failed to fetch business Acouunt" },
      { status: 500 }
    );
  }
}
