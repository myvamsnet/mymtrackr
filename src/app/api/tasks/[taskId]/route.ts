import { createClient } from "@/lib/supabse/server";
import { SingleTaskResponseData } from "@/types/tasks";
import { NextResponse } from "next/server";

// Update Business Account
export async function PUT(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  try {
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
    const payload: Partial<TaskPayload> = await req.json();
    const { taskId } = params;

    const { error, data } = await supabaseApi
      .from("tasks")
      .update({
        title: payload.title,
        taskDate: payload.taskDate,
        status: payload.status,
      })
      .eq("id", taskId)
      .eq("user_id", userId)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: "Failed to Update Task" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Task Updated Successfully",
        data,
      } as unknown as SingleTaskResponseData,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Update Task" },
      { status: 500 }
    );
  }
}

// Get invoicesandreceipts By id
export async function GET(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  try {
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
    const { taskId } = params;
    const { error, data } = await supabaseApi
      .from("tasks")
      .select("*")
      .eq("id", taskId)
      .eq("user_id", userId)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `Fetch  Data Successfully`,
        data,
      } as unknown as SingleTaskResponseData,
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch task` },
      { status: 500 }
    );
  }
}
// Delete invoicesandreceipts
export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  const supabaseApi = createClient();
  const userInfo = await supabaseApi?.auth?.getUser();
  const userId = userInfo?.data?.user?.id;
  try {
    if (!userId)
      return NextResponse.json({ error: "Unauthorized" }, { status: 500 });
    const { taskId } = params;
    const { error } = await supabaseApi
      .from("tasks")
      .delete()
      .eq("id", taskId)
      .eq("user_id", userId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json(
      {
        success: true,
        message: `Deleted Successfully`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: `Failed to Delete` }, { status: 500 });
  }
}

export interface TaskPayload {
  taskDate: string;
  title: string;
  status: boolean;
}
