import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceGrid } from "@/components/service-grid";
import { ServiceQuestions } from "@/components/service-questions";

export const metadata: Metadata = { title: "Leistungen für Immobilien in München", description: "Hausmeisterservice, Gebäudebetreuung und abgestimmte technische Leistungen von DRMA in München und Umgebung.", openGraph: { title: "Leistungen | DRMA Haus- & Gebäudeservice", description: "Acht Bereiche. Ein klarer Blick für Ihre Immobilie.", locale: "de_DE" } };

export default function ServicesPage() { return <>
  <section id="leistungsbereiche" className="section services-page-list navigator-section"><div className="shell"><div className="navigator-mobile-head"><span className="eyebrow">LEISTUNGS-NAVIGATOR</span><h1>Alles im Blick.<br/><em>Jede Aufgabe am richtigen Ort.</em></h1><p>Wählen Sie den Bereich, der zu Ihrem Anliegen passt. Öffnen Sie einen Bereich für weitere Informationen.</p></div><ServiceGrid /><div className="scope-note"><p>Bei fachgebundenen technischen Arbeiten klären wir Umfang, erforderliche Qualifikationen und Zuständigkeiten im Einzelfall.</p><Link className="text-link" href="/kontakt">Individuelles Anliegen besprechen <ArrowUpRight size={18}/></Link></div></div></section>
  <section className="section questions-section"><div className="shell"><ServiceQuestions/></div></section>
</>; }
