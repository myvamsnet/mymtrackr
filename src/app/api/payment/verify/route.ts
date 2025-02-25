import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabse/server";
import { Paystack } from "paystack-sdk";
import { AxiosError } from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference");
  const supabase = createClient();
  try {
    const paystack = new Paystack(
      process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY as string
    );
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id || !reference) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 404 });
    }
    const verification = await paystack.transaction.verify(reference);

    if (verification?.status && verification?.data?.customer?.email) {
      const userEmail = verification?.data?.customer?.email;
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
    const errorMessage = (error as Error).message;
    console.log(errorMessage);
    return NextResponse.json({
      message: "Payment verification failed",
      error: (error as AxiosError).response?.data || errorMessage,
    });
  }
}
