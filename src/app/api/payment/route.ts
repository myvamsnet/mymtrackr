import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, fullName } = (await req.json()) as {
      email: string;
      fullName: string;
    };

    if (!email && !fullName) {
      return NextResponse.json(
        { error: "Email  and FullName is required" },
        { status: 400 }
      );
    }

    const flutterwaveUrl = process.env.FLUTTERWAVE_URL as string;
    const subscriptionAmount = process.env.SUBSCRIPTION_AMOUNT as string;
    const paymentPlanId = process.env.SUBSCRIPTION_PLAN_ID as string;
    const secretKey = process.env.FLUTTERWAVE_SECRET_KEY as string;

    if (
      !flutterwaveUrl ||
      !subscriptionAmount ||
      !paymentPlanId ||
      !secretKey
    ) {
      return NextResponse.json(
        { error: "Missing required configuration" },
        { status: 500 }
      );
    }

    const response = await axios.post(
      `${flutterwaveUrl}/payments`,
      {
        tx_ref: Date.now(),
        amount: subscriptionAmount,
        currency: "NGN",
        payment_plan: paymentPlanId,
        payment_type: "card",
        redirect_url: `/app/subscription`, // Modify to your production URL
        customer: { email, name: fullName },
        customizations: {
          title: "Subscription Service",
          description: "Payment for subscription",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    const checkoutUrl = response?.data?.data?.link;
    if (!checkoutUrl) {
      return NextResponse.json(
        { error: "Failed to get payment link" },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutUrl }, { status: 200 });
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
