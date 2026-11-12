"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionEase } from "@/lib/motion";
export default function Template({children}:{children:ReactNode}){const reduce=useReducedMotion();return <motion.div initial={reduce?false:{opacity:.88,y:16}} animate={{opacity:1,y:0}} transition={reduce?{duration:0}:{duration:.42,ease:motionEase}}>{children}</motion.div>}
