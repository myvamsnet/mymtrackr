import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/supabse/middleware";
import { createClient } from "./lib/supabse/server";
export async function middleware(request: NextRequest) {
  console.log(request.headers.getSetCookie().values);
  // update user's auth session
  const supabase = createClient();
  const { data } = await supabase?.auth?.getUser();
  if (data?.user?.id) {
    return await updateSession(request);
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
