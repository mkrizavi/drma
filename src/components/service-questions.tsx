"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { motionEase } from "@/lib/motion";

const questions = [
  { question: "Wie beginnt eine Anfrage?", answer: "Beschreiben Sie Ihr Objekt und Ihr Anliegen. Auf dieser Website ist das Formular derzeit noch eine Vorschau ohne Versand. Sobald ein verifizierter Kontaktweg eingerichtet ist, kann darüber die weitere Abstimmung beginnen." },
  { question: "Wie gehen Sie mit technischen Arbeiten um?", answer: "Wir klären zunächst den Bedarf und die fachlichen Zuständigkeiten. Arbeiten, für die eine besondere Qualifikation oder Berechtigung erforderlich ist, werden nur im entsprechenden fachlichen Rahmen ausgeführt oder abgestimmt." },
];

export function ServiceQuestions() {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  return <div className="questions"><div><span className="eyebrow">GUT ZU WISSEN</span><h2>Vor dem<br/><em>ersten Schritt.</em></h2></div><div className="question-list">{questions.map((item, index) => <div className="question-item" key={item.question}><h3><button type="button" aria-expanded={open === index} aria-controls={`answer-${index}`} onClick={() => setOpen(open === index ? null : index)}>{item.question}<Plus size={19} className={open === index ? "is-open" : ""}/></button></h3><motion.div id={`answer-${index}`} aria-hidden={open !== index} initial={false} animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }} transition={{ duration: reduce ? 0 : .28, ease: motionEase }} className="question-answer"><p>{item.answer}</p></motion.div></div>)}</div></div>;
}
