import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIndex } from "@/components/service-index";
import { ServiceVisual } from "@/components/service-visual";
import { ServiceQuestions } from "@/components/service-questions";

export const metadata: Metadata = { title: "Leistungen für Immobilien in München", description: "Hausmeisterservice, Gebäudebetreuung und abgestimmte technische Leistungen von DRMA in München und Umgebung.", openGraph: { title: "Leistungen | DRMA Haus- & Gebäudeservice", description: "Acht Bereiche. Ein klarer Blick für Ihre Immobilie.", locale: "de_DE" } };

export default function ServicesPage() { return <>
  <section className="page-hero services-hero"><div className="shell page-hero-grid"><div><span className="eyebrow">UNSERE LEISTUNGEN</span><h1>Für alles, was<br/><em>ein Gebäude bewegt.</em></h1><p>Ob tägliche Betreuung oder technisches Anliegen: Wir helfen, Aufgaben zu ordnen und sinnvolle nächste Schritte abzustimmen.</p><Link className="button button-dark" href="/kontakt">Anfrage stellen <ArrowUpRight size={18}/></Link></div><ServiceVisual variant="building" priority sizes="(max-width: 800px) 100vw, 44vw"/></div></section>
  <section className="section services-page-list"><div className="shell"><div className="section-heading"><div><span className="eyebrow">LEISTUNGSBEREICHE</span><h2>Wählen Sie<br/><em>Ihr Anliegen.</em></h2></div><p>Jeder Bereich führt zu einer eigenen Seite mit Beispielen, Hinweisen und einem direkten Weg zur Anfrage.</p></div><ServiceIndex /><div className="scope-note"><p>Bei fachgebundenen technischen Arbeiten klären wir Umfang, erforderliche Qualifikationen und Zuständigkeiten im Einzelfall.</p><Link className="text-link" href="/kontakt">Individuelles Anliegen besprechen <ArrowUpRight size={18}/></Link></div></div></section>
  <section className="section questions-section"><div className="shell"><ServiceQuestions/></div></section>
</>; }
