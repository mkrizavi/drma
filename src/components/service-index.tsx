"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/content";
import { motionEase, motionTime } from "@/lib/motion";
import { ServiceVisual } from "./service-visual";

export function ServiceIndex({ compact = false }: { compact?: boolean }) {
  const items = compact ? services.slice(0, 6) : services;
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const selected = items[active];
  return <div className="service-browser">
    <div className="service-browser-list">{items.map((service, index) => <motion.div key={service.slug} className="service-browser-item" initial={reduce ? false : { opacity: .78, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: motionTime.reveal, delay: Math.min(index * .045, .25), ease: motionEase }}><Link href={`/leistungen/${service.slug}`} className={`service-browser-row ${active === index ? "is-active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}>
      <ServiceVisual variant={service.visual} className="service-thumb" />
      <span className="service-row-copy"><strong>{service.title}</strong><small>{service.short}</small></span>
      <span className="service-row-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
    </Link></motion.div>)}</div>
    <div className="service-browser-preview" aria-hidden="true"><div className="service-preview-media"><AnimatePresence initial={false}><motion.div className="service-preview-layer" key={selected.slug} initial={reduce ? false : { opacity: .45, clipPath: "inset(0 0 12% 0)", scale: 1.035 }} animate={{ opacity: 1, clipPath: "inset(0 0 0 0)", scale: 1 }} exit={reduce ? undefined : { opacity: 0, clipPath: "inset(8% 0 0 0)", scale: 1.015 }} transition={{ duration: motionTime.standard + .12, ease: motionEase }}><ServiceVisual variant={selected.visual} /></motion.div></AnimatePresence></div><div className="service-preview-caption"><AnimatePresence mode="wait" initial={false}><motion.span key={selected.slug} initial={reduce ? false : { opacity: .5, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -5 }} transition={{ duration: motionTime.quick, ease: motionEase }}>{selected.title}</motion.span></AnimatePresence><span>LEISTUNG ENTDECKEN <ArrowUpRight size={16} /></span></div></div>
  </div>;
}
