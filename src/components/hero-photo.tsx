"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ServiceVisual } from "./service-visual";

export function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -58]);
  return <div ref={ref} className="hero-photo-stage"><motion.div className="hero-photo-parallax" style={reduce ? undefined : { y }}><ServiceVisual variant="hero" priority sizes="(max-width: 900px) 100vw, 70vw" /></motion.div><span className="hero-photo-caption">ARCHITEKTUR IM BLICK · IMMOBILIEN IM ALLTAG</span></div>;
}
