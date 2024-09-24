import { NextResponse } from "next/server";
import axios from "axios";
import { createClient } from "@/lib/supabse/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const tx_ref = searchParams.get("tx_ref");
  const transaction_id = searchParams.get("transaction_id");
  const supabase = createClient();

  if (status === "successful" && tx_ref && transaction_id) {
    try {
      // Verify payment with Flutterwave API
      const response = await axios.get(
        `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
        {
          headers: {
            Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          },
        }
      );

      const { customer, status: paymentStatus } = response.data.data;

      if (paymentStatus === "successful") {
        const userEmail = customer.email;

        // Query user subscription by email
        const { data: userData, error: userError } = await supabase
          .from("usersprofile")
          .select("user_id, subscription_expiry")
          .eq("email", userEmail)
          .single();

        if (userError || !userData) {
          return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
          );
        }

        const { user_id, subscription_expiry } = userData;
        const currentExpiry = subscription_expiry
          ? new Date(subscription_expiry)
          : new Date();

        // Extend expiry by 1 year
        const newExpiryDate = new Date(
          currentExpiry.setFullYear(currentExpiry.getFullYear() + 1)
        );

        // Update subscription status and expiry date
        const { error: updateError } = await supabase
          .from("usersprofile")
          .update({
            subscription_status: "active",
            subscription_expiry: newExpiryDate.toISOString(),
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
      } else {
        return NextResponse.json(
          { message: "Payment verification failed" },
          { status: 400 }
        );
      }
    } catch (error) {
      return NextResponse.json({
        message: "Payment verification failed",
        error: (error as any).response?.data || (error as any).message,
      });
    }
  } else {
    return NextResponse.json(
      { message: "Invalid payment status or transaction reference" },
      { status: 400 }
    );
  }
}
