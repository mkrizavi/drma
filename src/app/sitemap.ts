import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || "http";
  const base = process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
  return ["", "/leistungen", "/ueber-uns", "/kontakt"].map(path => ({ url: `${base.replace(/\/$/, "")}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
}
