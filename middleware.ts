import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const pathname = request.nextUrl.pathname;
  const shouldEnforce = hostname === "netlify.euicc.haohanyh.ovh";
  if (shouldEnforce) {
    const isAsset = pathname.startsWith("/_next")
      || pathname === "/favicon.ico"
      || pathname.startsWith("/robots")
      || pathname.startsWith("/sitemap")
      || pathname.startsWith("/images")
      || pathname.startsWith("/banners")
      || pathname.includes(".");
    if (!isAsset && !pathname.startsWith("/hk")) {
      const url = request.nextUrl.clone();
      url.pathname = "/hk";
      url.searchParams.set("notice", "cn");
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
