import { NextRequest } from "next/server";
import { updateSession } from "./lib/supabse/middleware";

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request);
}
export const config = {
  matcher: [
    "/app/home/:path*",
    "/app/help/:path*",
    "/app/about/:path*",
    "/app/more/:path*",
    "/app/account/:path*",
    "/app/settings/:path*",
    "/app/profile/:path*",
    "/app/subscription/:path*",
  ],
};
