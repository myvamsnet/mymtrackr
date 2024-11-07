import { NextResponse } from "next/server";
import axios from "axios";
import { createClient } from "@/lib/supabse/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const supabase = createClient();

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    if (status !== "successful" && !tx_ref && !transaction_id) {
      return NextResponse.json(
        { message: "Invalid payment status" },
        { status: 400 }
      );
    }
    const flutterwaveUrl = process.env.NEXT_PUBLIC_FLUTTERWAVE_URL;
    // Verify payment with Flutterwave API
    const response = await axios.get(
      `${flutterwaveUrl}/transactions/${transaction_id}/verify`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLUTTERWAVE_SECRET_KEY}`,
        },
      }
    );

    const { customer, status: paymentStatus } = response?.data?.data;

    if (paymentStatus === "successful") {
      const userEmail = customer.email;

      // Step 2: Fetch the user with referrals and subscriptions
      const { data: userData, error: userError } = await supabase
        .from("userProfile")
        .select(
          `
      user_id,
      subscriptions(expiresAt, user_id)
    `
        )
        .eq("email", userEmail)
        .single();

      if (userError) {
        console.error(userError);
        return NextResponse.json(
          { message: "Failed to fetch user data" },
          { status: 404 }
        );
      }

      const { user_id, subscriptions } = userData as any;
      const currentExpiry = subscriptions?.expiresAt
        ? new Date(subscriptions?.expiresAt)
        : new Date();

      // Extend expiry by 1 year
      const newExpiryDate = new Date(
        currentExpiry.setFullYear(currentExpiry.getFullYear() + 1)
      );
      const subscriptionAmount = process.env.NEXT_PUBLIC_SUBSCRIPTION_AMOUNT;
      // Update subscription status and expiry date
      const { error: updateError } = await supabase
        .from("subscriptions")
        .update({
          status: "active",
          expiresAt: newExpiryDate.toISOString(),
          amount: Number(subscriptionAmount),
        })
        .eq("user_id", user_id);

      if (updateError) {
        console.error("Failed to update subscription:", updateError);
        return NextResponse.json(
          { message: "Failed to update subscription" },
          { status: 500 }
        );
      }

      // Redirect to success page
      return NextResponse.json(
        { message: "Subscription successful" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({
      message: "Payment verification failed",
      error: (error as any).response?.data || (error as any).message,
    });
  }
}
