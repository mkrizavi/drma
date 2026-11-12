import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "DRMA Haus- & Gebäudeservice | München und Umgebung", template: "%s | DRMA Haus- & Gebäudeservice" },
  description: "DRMA Haus- & Gebäudeservice: Hausmeisterservice, Gebäudebetreuung und abgestimmte Leistungen rund um Ihre Immobilie in München und Umgebung.",
  openGraph: { siteName: "DRMA Haus- & Gebäudeservice", locale: "de_DE", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body><a className="skip-link" href="#main">Zum Inhalt springen</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
