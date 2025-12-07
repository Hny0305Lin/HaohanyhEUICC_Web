import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  const pathname = request.nextUrl.pathname;
  const mainland = (process.env.MAINLAND_DOMAIN || "").toLowerCase();
  const intl = (process.env.INTL_DOMAIN || "netlify.euicc.haohanyh.ovh").toLowerCase();
  const enforceCN = process.env.ENFORCE_CN_REDIRECT === "true";
  const enforceHK = process.env.ENFORCE_HK_REDIRECT === "true";

  if (enforceHK && hostname === intl) {
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

  if (enforceCN && mainland && hostname === mainland) {
    const isAsset = pathname.startsWith("/_next")
      || pathname === "/favicon.ico"
      || pathname.startsWith("/robots")
      || pathname.startsWith("/sitemap")
      || pathname.startsWith("/images")
      || pathname.startsWith("/banners")
      || pathname.includes(".");
    if (!isAsset && !pathname.startsWith("/cn")) {
      const url = request.nextUrl.clone();
      url.pathname = "/cn";
      url.searchParams.set("notice", "cn");
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
