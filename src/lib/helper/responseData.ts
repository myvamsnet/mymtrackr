import { NextResponse } from "next/server";

export const responsedata = ({
  success,
  message,
  data,
  statusCode,
}: ResponseDataProps) => {
  return NextResponse.json(
    {
      success,
      message,
      data: data || null,
    },
    {
      status: statusCode || 200,
    }
  );
};
interface ResponseDataProps {
  success: boolean;
  message: string;
  data?: unknown | null;
  statusCode: number;
}
