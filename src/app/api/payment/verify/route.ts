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
      return NextResponse.json({ message: "Unauthorized" }, { status: 404 });

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
      const subscriptionAmount = process.env.NEXT_PUBLIC_SUBSCRIPTION_AMOUNT;
      const currentExpiry = new Date();
      // Extend expiry by 1 year
      const newExpiryDate = new Date(
        currentExpiry.setFullYear(currentExpiry.getFullYear() + 1)
      );
      // Call the Supabase RPC
      const { data, error } = await supabase.rpc(
        "process_subscription_update",
        {
          p_email: userEmail,
          p_expiry_date: newExpiryDate.toISOString(),
          p_subscription_amount: Number(subscriptionAmount),
        }
      );

      if (error) {
        console.error("RPC call failed:", error);
        return NextResponse.json(
          { message: "Failed to process subscription" },
          { status: 500 }
        );
      }

      // Success response
      return NextResponse.json(
        { message: "Subscription successful", data },
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
