"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/content";
import { ServiceVisual } from "./service-visual";

export function ServiceIndex({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const items = compact ? services.slice(0, 5) : services;
  return <div className="v2-service-layout"><div className="v2-service-list">{items.map((service, index) => <Link key={service.slug} href={`/leistungen/${service.slug}`} className={`v2-service-item ${active === index ? "is-active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}><span className="v2-service-name">{service.title}</span><span className="v2-service-short">{service.short}</span><ArrowUpRight size={23} aria-hidden="true" /></Link>)}</div><div className="v2-service-preview"><AnimatePresence mode="wait" initial={false}><motion.div key={items[active]?.slug} initial={reduce ? false : {opacity:0,scale:1.04}} animate={{opacity:1,scale:1}} exit={reduce ? undefined : {opacity:0,scale:.98}} transition={{duration:.28}}><ServiceVisual variant={items[active]?.visual || "facade"}/><div className="v2-preview-caption"><span>{items[active]?.title}</span><ArrowUpRight size={19}/></div></motion.div></AnimatePresence></div></div>;
}
