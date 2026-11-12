import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || "http";
  const base = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
  return { rules: { userAgent: "*", allow: "/", disallow: ["/impressum", "/datenschutz"] }, sitemap: `${base.replace(/\/$/, "")}/sitemap.xml` };
}
