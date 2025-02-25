import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";

export async function POST(req: NextRequest) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  try {
    const payload: Payload = await req.json();
    const create = {
      user_id: userInfo?.data?.user?.id,
      ...payload,
    };
    const { data, error } = await supabaseApi
      .from("records")
      .insert([create])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    return NextResponse.json(
      { error: "Failed to create record" },
      { status: 500 }
    );
  }
}

export interface Payload {
  amount: number;
  name: string;
  note?: string;
  image?: string;
  type: "income" | "expense" | "payable" | "debtor";
  invoicesAndReceiptsId?: string;
}
