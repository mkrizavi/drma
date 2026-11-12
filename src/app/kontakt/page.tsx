import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
export const metadata:Metadata={title:"Kontakt | Haus- & Gebäudeservice München",description:"Kontaktieren Sie DRMA Haus- & Gebäudeservice, Davor Drmić, in München. Kontaktformular derzeit als Vorschau ohne Versand.",openGraph:{title:"Kontakt | DRMA Haus- & Gebäudeservice",description:"Sprechen Sie mit uns über Ihre Immobilie in München und Umgebung.",locale:"de_DE"}};
export default function ContactPage(){return <>
  <section className="contact-hero"><div className="shell"><span className="eyebrow">KONTAKT</span><h1>Was braucht<br/><em>Ihre Immobilie?</em></h1><p>Erzählen Sie uns von Ihrem Objekt und Ihrem Anliegen. Der erste Schritt ist ein klares Gespräch.</p></div></section>
  <section className="section contact-section"><div className="shell contact-grid"><aside><span className="eyebrow">IHR ANSPRECHPARTNER</span><h2>DRMA in München.</h2><address><strong>DRMA Haus- &amp; Gebäudeservice</strong><br/>Davor Drmić<br/>Speyerer Str. 12<br/>München, Deutschland</address><div className="contact-info-note"><span>BITTE BEACHTEN</span><p>Das Formular ist derzeit eine Vorschau. Es übermittelt oder speichert keine Angaben.</p></div></aside><div className="contact-panel"><span className="eyebrow">IHRE ANFRAGE</span><h2>Beschreiben Sie<br/><em>Ihr Anliegen.</em></h2><Suspense fallback={<p>Formular wird geladen …</p>}><ContactForm/></Suspense></div></div></section>
</>}
