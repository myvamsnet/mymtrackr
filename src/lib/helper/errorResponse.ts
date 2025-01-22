import { NextResponse } from "next/server";

// Helper function for error responses
export function errorResponse(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status });
}
