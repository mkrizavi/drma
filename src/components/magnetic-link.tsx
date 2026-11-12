"use client";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
export function MagneticLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null); const reduce = useReducedMotion();
  function move(event: React.MouseEvent<HTMLAnchorElement>) { if (reduce || matchMedia("(pointer: coarse)").matches || !ref.current) return; const rect=ref.current.getBoundingClientRect(); ref.current.style.setProperty("--mx",`${(event.clientX-rect.left-rect.width/2)*.12}px`); ref.current.style.setProperty("--my",`${(event.clientY-rect.top-rect.height/2)*.12}px`); }
  function reset(){ref.current?.style.setProperty("--mx","0px");ref.current?.style.setProperty("--my","0px");}
  return <motion.div className="magnetic-wrap" whileTap={{scale:.97}}><Link ref={ref} href={href} className={`magnetic-link ${className}`} onMouseMove={move} onMouseLeave={reset}>{children}</Link></motion.div>;
}
