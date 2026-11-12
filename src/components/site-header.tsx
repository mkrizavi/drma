"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react";
import { motionEase, motionTime } from "@/lib/motion";

const nav = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  const first = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    first.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); button.current?.focus(); }
      if (event.key === "Tab") {
        const list = [...document.querySelectorAll<HTMLElement>("#mobile-navigation a")];
        const at = list.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && at === 0) { event.preventDefault(); list.at(-1)?.focus(); }
        else if (!event.shiftKey && at === list.length - 1) { event.preventDefault(); list[0]?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => setOpen(false), [path]);

  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="DRMA Haus- & Gebäudeservice, Startseite"><span className="brand-mark">DRMA<span>.</span></span><span className="brand-sub">HAUS- &amp; GEBÄUDESERVICE</span></Link>
      <nav className="desktop-nav" aria-label="Hauptnavigation">{nav.map(item => <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined}>{item.label}{path === item.href && <motion.span layoutId="nav-indicator" className="nav-indicator" />}</Link>)}</nav>
      <Link className="header-contact" href="/kontakt">Anfrage stellen <ArrowUpRight size={16} /></Link>
      <button ref={button} className="menu-toggle" type="button" aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)}>{open ? <X size={25} /> : <Menu size={25} />}</button>
    </div>
    <motion.div className="header-progress" style={reduce ? undefined : { scaleX: scrollYProgress }} aria-hidden="true" />
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile Hauptnavigation" initial={reduce ? false : { opacity: .8, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -14 }} transition={{ duration: motionTime.quick, ease: motionEase }}>
      {nav.map((item, index) => <Link ref={index === 0 ? first : undefined} key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={19} /></Link>)}
      <Link className="mobile-nav-cta" href="/kontakt" onClick={() => setOpen(false)}>Anfrage stellen <ArrowUpRight size={20} /></Link>
    </motion.nav>}</AnimatePresence>
  </header>;
}
