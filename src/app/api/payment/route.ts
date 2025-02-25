import { AxiosError } from "axios";
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
      plan: process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID as string,
      callback_url: redirect_url,
    });

    console.log(response, process.env.NEXT_PUBLIC_SUBSCRIPTION_PLAN_ID);
    if (!response.status) {
      return NextResponse.json({ error: response.message }, { status: 400 });
    }
    return NextResponse.json(
      { checkoutUrl: response?.data?.authorization_url },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    if (error instanceof Error) {
      console.error(
        "Payment initiation error:",
        (error as AxiosError).response?.data || errorMessage
      );
    } else {
      console.error("Payment initiation error:", error);
    }
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
