import { createClient } from "@/lib/supabse/server";
import { BusinessResponseData } from "@/types/business";
import {
  InvoicesAndReceiptsResponseData,
  SingleInvoicesAndReceiptsResponseData,
} from "@/types/invoicesandreceipts";
import {
  InvoiceAndReceiptData,
  InvoiceAndReceiptType,
} from "@/zustand/invoiceAndReceiptStore";
import { NextRequest, NextResponse } from "next/server";

// Create Business Account
export async function POST(req: NextRequest) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const payload: InvoiceAndReceiptData = await req.json();
  const create = {
    ...payload,
  };
  try {
    if (!userInfo?.data?.user?.id)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });

    const { data, error } = await supabaseApi
      .from("invoicesandreceipts")
      .insert([create])
      .eq("user_id", userInfo?.data?.user?.id)
      .eq("business_id", payload.business_id)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `Create ${payload.type} successfully`,
        data,
      } as SingleInvoicesAndReceiptsResponseData,
      { status: 201 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { error: `Fail to create ${payload.type}` },
      { status: 500 }
    );
  }
}

// Fetch api/invoicesandreceipts
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  // Get query parameters
  const type = searchParams.get("type") as InvoiceAndReceiptType;
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const searchTerm = searchParams.get("searchTerm");
  try {
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });

    // Build the initial query
    let query = supabaseApi
      .from("invoicesandreceipts")
      .select("*")
      .eq("type", type)
      .eq("user_id", userId)
      .order("updated_at", { ascending: false })
      .range(0, 10);

    // Apply date filters if present
    if (startDate) {
      query = query.gte("created_at", startDate);
    }

    if (endDate) {
      query = query.lte("created_at", endDate);
    }

    // Apply search term filters
    if (
      searchTerm &&
      searchTerm !== "" &&
      searchTerm !== "undefined" &&
      searchTerm !== "null" &&
      searchTerm !== "NaN"
    ) {
      const numericSearchTerm = Number(searchTerm);
      if (!isNaN(numericSearchTerm)) {
        // If searchTerm is a valid number, search by amount

        query = query.eq("amount", numericSearchTerm);
      } else if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
        // If searchTerm is a string, search by name using ilike
        const trimmedSearchTerm = searchTerm.trim();

        query = query.ilike("name", `%${trimmedSearchTerm}%`);
      }
    }

    // Execute the query and handle response
    const { data, error } = await query;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `Get ${type} records`,
        data,
      } as InvoicesAndReceiptsResponseData,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get records" },
      { status: 500 }
    );
  }
}
