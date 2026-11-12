import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ServiceIndex } from "@/components/service-index";
import { ServiceVisual } from "@/components/service-visual";
import { MagneticLink } from "@/components/magnetic-link";
import { services } from "@/lib/content";

export const metadata:Metadata={title:"Haus- & Gebäudeservice in München",description:"DRMA Haus- & Gebäudeservice in München und Umgebung. Gebäudebetreuung, Hausmeisterservice und koordinierte technische Leistungen für Ihre Immobilie.",openGraph:{title:"DRMA Haus- & Gebäudeservice | München",description:"Wir kümmern uns. Damit alles läuft.",locale:"de_DE",type:"website"}};

export default function Home(){return <>
  <section className="v3-hero">
    <div className="v3-hero-image"><ServiceVisual variant="hero" priority/></div>
    <div className="v3-hero-wash" aria-hidden="true"/>
    <div className="shell v3-hero-inner"><div className="v3-hero-copy">
      <span className="v2-eyebrow">DRMA · HAUS- &amp; GEBÄUDESERVICE · MÜNCHEN</span>
      <h1><span className="hero-line">Wir kümmern uns.</span><span className="hero-line hero-line-accent">Damit alles läuft.</span></h1>
      <p>Professionelle Betreuung für gepflegte Immobilien und einen funktionierenden Gebäudealltag in München und Umgebung.</p>
      <div className="v2-hero-actions"><MagneticLink href="/leistungen" className="v2-button v2-button-lime">Leistungen entdecken <ArrowUpRight size={19}/></MagneticLink><Link className="v3-hero-secondary" href="/kontakt">Anfrage stellen <ArrowUpRight size={18}/></Link></div>
    </div></div>
    <div className="shell v3-hero-foot"><span>IMMOBILIEN MIT AUFMERKSAMKEIT BETREUEN</span><a href="#leistungen">WEITER ENTDECKEN <ArrowDown size={17}/></a></div>
  </section>

  <section id="leistungen" className="v3-services section"><div className="shell"><div className="v3-section-heading"><Reveal><span className="v2-eyebrow">LEISTUNGEN IM ÜBERBLICK</span><h2>Alles im Blick.<br/><em>Was ansteht, im Griff.</em></h2></Reveal><p>Ein Gebäude stellt viele Anforderungen. Wir helfen, Aufgaben zu erkennen, zu ordnen und die passenden nächsten Schritte abzustimmen.</p></div><ServiceIndex compact/><Link className="v2-inline" href="/leistungen">Alle Leistungen entdecken <ArrowRight size={19}/></Link></div></section>

  <section className="v3-position section"><div className="shell v3-position-grid"><Reveal><div><span className="v2-eyebrow">UNSER ANSPRUCH</span><h2>Gute Betreuung<br/>beginnt mit <em>Hinschauen.</em></h2></div></Reveal><Reveal><div className="v3-position-copy"><p>Ob laufender Betrieb, technisches Anliegen oder geplante Instandhaltung: Immobilien brauchen Aufmerksamkeit und klare Kommunikation.</p><p>Wir betrachten Ihr Objekt als Ganzes und stimmen mit Ihnen ab, was sinnvoll ist. Bei fachgebundenen Arbeiten klären wir die notwendigen Qualifikationen und Zuständigkeiten im Einzelfall.</p><Link className="v2-inline" href="/ueber-uns">Unsere Haltung kennenlernen <ArrowUpRight size={18}/></Link></div></Reveal></div></section>

  <section className="v3-highlights section"><div className="shell"><Reveal><span className="v2-eyebrow">AUSGEWÄHLTE BEREICHE</span><h2>Für den Alltag.<br/><em>Und alles, was folgt.</em></h2></Reveal><div className="v3-highlight-grid">{[services[0],services[2],services[7]].map(service=><Link className="v3-highlight-card" key={service.slug} href={`/leistungen/${service.slug}`}><ServiceVisual variant={service.visual}/><div className="v3-highlight-copy"><h3>{service.title}</h3><p>{service.short}</p><ArrowUpRight size={22}/></div></Link>)}</div></div></section>

  <section className="v2-process section"><div className="shell"><span className="v2-eyebrow">SO KANN ZUSAMMENARBEIT BEGINNEN</span><div className="v2-process-grid"><Reveal><h2>Klar im Gespräch.<br/><em>Sorgfältig im Tun.</em></h2></Reveal><div className="v2-process-steps">{[{title:"Anfrage",text:"Sie beschreiben Ihre Immobilie und Ihr Anliegen."},{title:"Abstimmung",text:"Wir klären Bedarf, Möglichkeiten und fachliche Zuständigkeiten."},{title:"Betreuung",text:"Die nächsten Schritte richten sich nach Ihrem Objekt und der vereinbarten Aufgabe."}].map(item=><Reveal key={item.title}><div className="v2-process-step"><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight size={20}/></div></Reveal>)}</div></div></div></section>

  <section className="v3-owner section"><div className="shell v3-owner-grid"><div className="v3-owner-image"><Image src="/images/davor-drmic.webp" alt="Davor Drmić, Inhaber von DRMA Haus- & Gebäudeservice" fill sizes="(max-width: 760px) 100vw, 45vw" className="v3-owner-photo"/></div><Reveal><div className="v3-owner-copy"><span className="v2-eyebrow">PERSÖNLICH FÜR IHR OBJEKT</span><h2>Ein Name.<br/><em>Ein Ansprechpartner.</em></h2><p>Davor Drmić ist Inhaber von DRMA Haus- &amp; Gebäudeservice. Persönliche Verantwortung, Sorgfalt und nachvollziehbare Abstimmung prägen den Blick auf jede Immobilie.</p><strong>Davor Drmić</strong><span>Inhaber — DRMA Haus- &amp; Gebäudeservice</span><Link className="v2-inline" href="/ueber-uns">Mehr über DRMA <ArrowUpRight size={18}/></Link></div></Reveal></div></section>

  <section className="v3-region"><div className="shell v3-region-inner"><Reveal><span className="v2-eyebrow">UNSER FOKUS</span><h2>Für München.<br/><em>Und die Region.</em></h2></Reveal><p>Vor Ort für Immobilien in München und Umgebung. Sprechen Sie mit uns über Ihr Gebäude und Ihr Anliegen.</p></div></section>
  <section className="v2-closing"><div className="shell"><Reveal><span className="v2-eyebrow">DER NÄCHSTE SCHRITT</span><h2>Ihre Immobilie.<br/><em>In guten Händen.</em></h2><MagneticLink href="/kontakt" className="v2-button v2-button-lime">Anfrage stellen <ArrowUpRight size={20}/></MagneticLink></Reveal></div></section>
</>}
