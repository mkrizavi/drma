"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
export default function Template({children}:{children:ReactNode}){const reduce=useReducedMotion();return <motion.div initial={reduce?false:{opacity:.96,y:8}} animate={{opacity:1,y:0}} transition={reduce?{duration:0}:{duration:.35,ease:[.22,1,.36,1]}}>{children}</motion.div>}
