import { createClient } from "@/lib/supabse/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const supabaseApi = createClient();
  const { searchParams } = new URL(req.url);
  const userInfo = await supabaseApi?.auth?.getUser();
  const user_id = userInfo?.data?.user?.id;
  const pageParam = parseInt(searchParams.get("pageParam") || "0");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const searchTerm = searchParams.get("searchTerm");
  if (!user_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
  }
  try {
    // Build the initial query
    let query = supabaseApi
      .from("records")
      .select("*")
      .eq("user_id", user_id)
      .order("updated_at", { ascending: false });

    if (pageParam) {
      query = query.range(pageParam, pageParam + 10);
    }

    // Apply date filters if present
    if (
      startDate &&
      startDate !== "Invalid Date" &&
      startDate !== "" &&
      startDate !== "null" &&
      endDate &&
      endDate !== "Invalid Date" &&
      endDate !== "" &&
      endDate !== "null"
    ) {
      query = query.gte("created_at", startDate).lte("created_at", endDate);
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
      console.error("Query error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        success: true,
        data,
        message: "Records fetched successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Failed to get records" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const supabaseApi = createClient();

  try {
    const userInfo = await supabaseApi.auth.getUser();
    const userId = userInfo?.data?.user?.id;

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload: Payload = await req.json();

    const create = {
      user_id: userId,
      ...payload,
    };

    const { data: recordData, error: recordError } = await supabaseApi
      .from("records")
      .insert([create])
      .select()
      .single();

    if (recordError) {
      return NextResponse.json({ error: recordError.message }, { status: 400 });
    }

    if (recordData?.invoicesAndReceiptsId) {
      const { data: invoiceData, error: invoiceError } = await supabaseApi
        .from("invoicesandreceipts")
        .update({ record_id: recordData.id })
        .eq("id", recordData.invoicesAndReceiptsId)
        .eq("user_id", userId)
        .select()
        .single();

      if (invoiceError) {
        console.error(invoiceError);
        return NextResponse.json(
          { error: invoiceError.message },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(recordData, { status: 201 });
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json(
      { error: "Failed to create record" },
      { status: 500 }
    );
  }
}

// POST handler to delete a record
export async function DELETE(req: Request) {
  const body = await req.json();
  const { recordId } = body;

  if (!recordId) {
    return NextResponse.json(
      {
        success: false,
        error: "No record ID provided.",
      },
      { status: 400 }
    );
  }

  const supabaseApi = createClient();
  const { data: userData, error: userError } = await supabaseApi.auth.getUser();

  if (userError || !userData?.user?.id) {
    console.error("User authentication failed.", userError);
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized access.",
      },
      { status: 401 }
    );
  }

  const userId = userData.user.id;

  try {
    // Fetch the record from `invoicesandreceipts`
    const { data: invoicesAndReceipts, error: fetchError } = await supabaseApi
      .from("invoicesandreceipts")
      .select("id, record_id")
      .eq("record_id", recordId)
      .eq("user_id", userId)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      // Handle fetch error, excluding "No rows found" (code PGRST116)
      console.error("Failed to fetch the record.", fetchError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to find the record. Please try again.",
        },
        { status: 500 }
      );
    }

    // If `recordId` exists in `invoicesandreceipts`, update it to null
    if (invoicesAndReceipts?.record_id && invoicesAndReceipts?.id) {
      const { error: updateError } = await supabaseApi
        .from("invoicesandreceipts")
        .update({ record_id: null })
        .eq("id", invoicesAndReceipts.id)
        .eq("user_id", userId);

      if (updateError) {
        console.error(
          "Failed to update the invoicesandreceipts record.",
          updateError
        );
        return NextResponse.json(
          {
            success: false,
            error: "Failed to update the record. Please try again.",
          },
          { status: 500 }
        );
      }
    }

    // Delete the record from the `records` table
    const { error: deleteError } = await supabaseApi
      .from("records")
      .delete()
      .eq("user_id", userId)
      .eq("id", recordId);

    if (deleteError) {
      console.error("Failed to delete the record.", deleteError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to delete the record. Please try again.",
        },
        { status: 500 }
      );
    }

    // Respond with success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error occurred.", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
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
