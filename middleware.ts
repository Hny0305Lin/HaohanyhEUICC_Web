import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (hostname === "netlify.euicc.haohanyh.ovh") {
    const url = request.nextUrl.clone();
    url.pathname = "/hk";
    url.searchParams.set("notice", "cn");
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

