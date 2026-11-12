"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/content";
import { motionEase, motionTime } from "@/lib/motion";
import { ServiceIllustration } from "./service-illustration";

export function ServiceIndex() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const selected = services[active];

  return <div className="service-browser">
    <div className="service-browser-list">
      {services.map((service, index) => <motion.div key={service.slug} className="service-browser-item" initial={reduce ? false : { opacity: .78, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: motionTime.reveal, delay: Math.min(index * .045, .25), ease: motionEase }}>
        <Link href={`/leistungen/${service.slug}`} className={`service-browser-row ${active === index ? "is-active" : ""}`} onPointerEnter={event => { if (event.pointerType === "mouse") setActive(index); }} onFocus={() => setActive(index)}>
          <ServiceIllustration variant={service.visual} compact active={false} className="service-thumb" />
          <span className="service-row-copy"><strong>{service.title}</strong><small>{service.short}</small></span>
          <span className="service-row-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
        </Link>
      </motion.div>)}
    </div>
    <div className="service-browser-preview">
      <div className="service-preview-media" aria-hidden="true">
        {services.map((service, index) => <div key={service.slug} className={`service-preview-layer ${active === index ? "is-active" : ""}`}><ServiceIllustration variant={service.visual} active={active === index} /></div>)}
      </div>
      <div className="service-preview-caption">
        <AnimatePresence mode="wait" initial={false}><motion.span key={selected.slug} initial={reduce ? false : { opacity: .5, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -5 }} transition={{ duration: motionTime.quick, ease: motionEase }}>{selected.title}</motion.span></AnimatePresence>
        <Link href={`/leistungen/${selected.slug}`}>Im Detail ansehen <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  </div>;
}
