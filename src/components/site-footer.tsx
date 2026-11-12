import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return <footer className="footer">
    <div className="shell">
      <div className="footer-top">
        <div><span className="eyebrow light">GUT BETREUT</span><h2>Alles rund um<br /><em>Ihre Immobilie.</em></h2></div>
        <Link href="/kontakt" className="round-arrow" aria-label="Kontakt aufnehmen"><ArrowUpRight size={32} strokeWidth={1.4} /></Link>
      </div>
      <div className="footer-main">
        <div><Link href="/" className="footer-wordmark">DRMA<span>.</span></Link><p>Haus- &amp; Gebäudeservice<br />Davor Drmić, Inhaber<br/>Speyerer Str. 12 · München<br/>Für München und Umgebung.</p></div>
        <nav aria-label="Footernavigation"><span>ENTDECKEN</span><Link href="/">Startseite</Link><Link href="/leistungen">Leistungen</Link><Link href="/ueber-uns">Über uns</Link><Link href="/kontakt">Kontakt</Link></nav>
        <nav aria-label="Rechtliches"><span>RECHTLICHES</span><Link href="/impressum">Impressum (Entwurf)</Link><Link href="/datenschutz">Datenschutz (Entwurf)</Link></nav>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} DRMA Haus- &amp; Gebäudeservice</span><span>Mit Sorgfalt für München und Umgebung.</span></div>
    </div>
  </footer>;
}
