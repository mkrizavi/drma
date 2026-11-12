"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionEase, motionTime } from "@/lib/motion";

export function Reveal({ children, className = "", delay = 0, direction = "up" }: { children: ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" }) {
  const reduce = useReducedMotion();
  const offset = direction === "up" ? { y: 34 } : { x: direction === "left" ? 28 : -28 };
  return <motion.div className={className} initial={reduce ? false : { opacity: 0.76, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: motionTime.reveal, delay, ease: motionEase }}>{children}</motion.div>;
}
