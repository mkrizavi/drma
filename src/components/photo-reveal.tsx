"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { motionEase, motionTime } from "@/lib/motion";

/** Keeps the image in the HTML before hydration, then adds a restrained viewport reveal. */
export function PhotoReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={`photo-reveal ${className}`} initial={reduce ? false : { opacity: 0.84, clipPath: "inset(0 8% 0 0)", y: 22 }} whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)", y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: motionTime.image, ease: motionEase }}>{children}</motion.div>;
}
