import { NextRequest, NextResponse } from "next/server";

export async function middleware(_request: NextRequest) {
  // All pages are publicly accessible — no login gate.
  // Auth is optional: users can sign up to persist data across devices.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
