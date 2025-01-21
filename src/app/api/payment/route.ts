import { NextRequest, NextResponse } from "next/server";
import { Paystack } from "paystack-sdk";

const paystack = new Paystack(
  process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY as string
);

export async function POST(req: NextRequest) {
  try {
    const { email, fullName, redirect_url } = (await req.json()) as {
      email: string;
      fullName: string;
      redirect_url: string;
    };

    if (!email && !fullName) {
      return NextResponse.json(
        { error: "Email  and FullName is required" },
        { status: 400 }
      );
    }

    // Initialize transaction for subscription
    const response = await paystack.transaction.initialize({
      email,
      amount: process.env.NEXT_PUBLIC_SUBSCRIPTION_AMOUNT as string, // 3000 Naira
      plan: process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID,
      callback_url: redirect_url,
    });
    if (!response.status) {
      return NextResponse.json({ error: response.message }, { status: 400 });
    }
    return NextResponse.json(
      { checkoutUrl: response?.data?.authorization_url },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Payment initiation error:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
