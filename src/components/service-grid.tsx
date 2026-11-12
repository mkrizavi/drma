"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { services, type Service } from "@/lib/content";
import { motionEase, motionTime } from "@/lib/motion";
import { ServiceIllustration } from "./service-illustration";

const networkRoutes = [
  { x: 54, y: 53, path: "M54 53 H143 V106 H249" },
  { x: 54, y: 113, path: "M54 113 H172 V125 H249" },
  { x: 54, y: 173, path: "M54 173 H172 V145 H249" },
  { x: 54, y: 233, path: "M54 233 H143 V164 H249" },
  { x: 546, y: 53, path: "M546 53 H457 V106 H351" },
  { x: 546, y: 113, path: "M546 113 H428 V125 H351" },
  { x: 546, y: 173, path: "M546 173 H428 V145 H351" },
  { x: 546, y: 233, path: "M546 233 H457 V164 H351" },
] as const;

function ServiceNetwork({ active }: { active: string | null }) {
  const selectedIndex = services.findIndex(service => service.slug === active);
  return <div className="navigator-network" aria-hidden="true">
    <svg viewBox="0 0 600 286" fill="none" focusable="false">
      <path className="navigator-network-frame" d="M14 14 H586 V272 H14 Z M27 27 H573 V259 H27 Z" />
      <path className="navigator-network-axis" d="M300 14 V272 M14 143 H586" />
      {networkRoutes.map((route, index) => <g key={index} className={`navigator-network-route ${selectedIndex === index ? "is-active" : ""}`}>
        <path d={route.path} className="navigator-network-line" />
        <circle cx={route.x} cy={route.y} r="7" className="navigator-network-node" />
        <circle cx={route.x} cy={route.y} r="2" className="navigator-network-core" />
      </g>)}
      <path className="navigator-network-building" d="M249 198 V91 L300 65 L351 91 V198 Z M267 119 H283 V135 H267 Z M292 119 H308 V135 H292 Z M317 119 H333 V135 H317 Z M267 151 H283 V167 H267 Z M292 151 H308 V167 H292 Z M317 151 H333 V167 H317 Z M282 198 V178 H318 V198" />
      <path className="navigator-network-ground" d="M222 198 H378 M235 208 H365" />
      <circle cx="300" cy="65" r="5" className="navigator-network-hub" />
    </svg>
    <div className="navigator-network-caption"><span>IMMOBILIE</span><span>{selectedIndex >= 0 ? services[selectedIndex].title : "WÄHLEN SIE EINEN BEREICH"}</span></div>
  </div>;
}

function ServiceDialog({ service, onClosed, trigger }: { service: Service; onClosed: () => void; trigger: RefObject<HTMLButtonElement | null> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const navigating = useRef(false);
  const [closing, setClosing] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const returnFocus = trigger.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => closeButton.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      if (element.open) element.close();
      document.body.style.overflow = previousOverflow;
      if (!navigating.current) returnFocus?.focus();
    };
  }, [trigger]);

  function requestClose() {
    if (closing) return;
    if (reduce) onClosed();
    else setClosing(true);
  }

  return <dialog ref={dialog} className={`service-dialog ${closing ? "is-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="service-dialog-title" aria-describedby="service-dialog-intro" onCancel={event => { event.preventDefault(); requestClose(); }} onClick={event => { if (event.target === dialog.current) requestClose(); }}>
    <motion.div className="service-dialog-panel" initial={reduce ? false : { opacity: 0, y: 22, scale: .985 }} animate={closing ? { opacity: 0, y: 12, scale: .99 } : { opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduce ? 0 : closing ? motionTime.quick : motionTime.standard, ease: motionEase }} onAnimationComplete={() => { if (closing) onClosed(); }}>
      <button ref={closeButton} className="service-dialog-close" type="button" onClick={requestClose} aria-label="Leistungsdetails schließen"><X size={22} aria-hidden="true" /></button>
      <div className="service-dialog-layout">
        <div className="service-dialog-visual"><ServiceIllustration variant={service.visual} /></div>
        <div className="service-dialog-content">
          <span className="eyebrow">LEISTUNGSBEREICH</span>
          <h2 id="service-dialog-title">{service.title}</h2>
          <p id="service-dialog-intro" className="service-dialog-intro">{service.intro}</p>
          <p>{service.description}</p>
          <p>{service.scope}</p>
          <h3>Typische Anliegen</h3>
          <ul>{service.examples.map(example => <li key={example}>{example}</li>)}</ul>
          <div className="service-dialog-actions">
            <Link className="button button-dark" href={`/leistungen/${service.slug}`} onClick={() => { navigating.current = true; }}>Im Detail ansehen <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="text-link" href={`/kontakt?leistung=${service.slug}`} onClick={() => { navigating.current = true; }}>Anfrage stellen <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </motion.div>
  </dialog>;
}

export function ServiceGrid() {
  const [selected, setSelected] = useState<Service | null>(null);
  const [hot, setHot] = useState<string | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!selected) return;
    const mobile = window.matchMedia("(max-width: 900px)");
    const closeOnMobile = () => { if (mobile.matches) setSelected(null); };
    mobile.addEventListener("change", closeOnMobile);
    return () => mobile.removeEventListener("change", closeOnMobile);
  }, [selected]);

  return <>
    <div className="navigator-head">
      <motion.div className="navigator-intro" initial={reduce ? false : { opacity: .65, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: motionTime.reveal, ease: motionEase }}>
        <span className="eyebrow">LEISTUNGS-NAVIGATOR</span>
        <h1>Alles im Blick.<br/><em>Jede Aufgabe am richtigen Ort.</em></h1>
        <p>Von der täglichen Betreuung bis zur Abstimmung technischer Anliegen: Wählen Sie den Bereich, der zu Ihrer Immobilie passt.</p>
        <span className="navigator-instruction">Bereich wählen · Leistung entdecken</span>
      </motion.div>
    </div>
    <div className="navigator-body">
    <div className="service-card-grid">{services.map((service, index) => <motion.div key={service.slug} className="service-card-wrap" initial={reduce ? false : { opacity: .78, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: motionTime.reveal, delay: Math.min(index * .045, .28), ease: motionEase }}>
      <button type="button" className="service-card" onClick={event => { trigger.current = event.currentTarget; setSelected(service); }} onPointerEnter={event => { if (event.pointerType === "mouse") setHot(service.slug); }} onPointerLeave={() => setHot(null)} onFocus={() => setHot(service.slug)} onBlur={() => setHot(null)} aria-label={`${service.title}: Details öffnen`} aria-describedby={`service-card-description-${service.slug}`}>
        <span className="service-card-illustration"><ServiceIllustration variant={service.visual} active={hot === service.slug} /></span>
        <span className="service-card-content"><strong>{service.title}</strong><span id={`service-card-description-${service.slug}`}>{service.short}</span></span>
        <span className="service-card-cue"><span>Details ansehen</span><ArrowUpRight size={18} aria-hidden="true" /></span>
      </button>
    </motion.div>)}</div>
    <motion.div className="navigator-network-shell" initial={reduce ? false : { opacity: 0, y: 18, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: motionTime.image, delay: reduce ? 0 : .08, ease: motionEase }}><ServiceNetwork active={hot} /></motion.div>
    </div>
    {selected && <ServiceDialog key={selected.slug} service={selected} onClosed={() => setSelected(null)} trigger={trigger} />}
  </>;
}
