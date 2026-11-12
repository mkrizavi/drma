"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { ServiceVisualKey } from "@/lib/content";

type Props = { variant: ServiceVisualKey; active?: boolean; compact?: boolean; className?: string };

function Hausmeister() {
  return <>
    <g stroke="currentColor"><path d="M188 390V98h264v292M175 390h290M188 154h264M188 234h264M188 314h264" />
      {[212,278,344,410].map(x => [174,254,334].map(y => <rect key={`${x}-${y}`} x={x} y={y} width="40" height="51" strokeWidth="1.7"/>))}
      <path d="M294 390v-55h52v55M320 98V76M298 76h44" />
    </g>
    <g stroke="var(--olive)" strokeWidth="2.4"><circle className="tech-pulse" cx="298" cy="199" r="27"/><path d="m316 218 22 22"/><circle className="tech-pulse tech-delay" cx="430" cy="280" r="18"/><path d="m422 280 6 6 12-14"/></g>
    <path className="tech-scan" d="M181 113h278" stroke="var(--olive)" strokeWidth="2" />
  </>;
}

function Gebaeude() {
  return <>
    <g stroke="currentColor" strokeWidth="2"><rect x="142" y="82" width="356" height="290"/><path d="M142 203h356M142 295h356M278 82v213M376 203v169M208 295v77M438 82v121"/>
      <path d="M186 118h52v46h-52zM315 117h85v49h-85zM408 232h54v34h-54zM235 320h88v32h-88z" strokeWidth="1"/>
    </g>
    <path className="tech-flow" d="M206 139h68v101h142v82h-130" stroke="var(--olive)" strokeWidth="3" strokeDasharray="9 15" />
    <g fill="none" stroke="var(--olive)" strokeWidth="2.5"><circle className="tech-pulse" cx="206" cy="139" r="13"/><circle className="tech-pulse tech-delay" cx="416" cy="240" r="13"/><circle className="tech-pulse tech-delay-2" cx="286" cy="322" r="13"/></g>
    <g fill="var(--olive)"><circle cx="206" cy="139" r="3"/><circle cx="416" cy="240" r="3"/><circle cx="286" cy="322" r="3"/></g>
  </>;
}

function Heizung() {
  return <>
    <g stroke="currentColor" strokeWidth="2.2"><path d="M154 149h332v204H154zM168 167v168M472 167v168M154 183h332M154 319h332"/>
      {[184,222,260,298,336,374,412,450].map(x => <rect key={x} x={x} y="184" width="23" height="134" rx="8" />)}
      <path d="M154 242h-43v90h43M486 241h43v91h-43"/><circle cx="116" cy="333" r="11"/><circle cx="524" cy="333" r="11"/>
    </g>
    <path className="tech-flow" d="M119 332h35v-77h332v77h36" stroke="var(--olive)" strokeWidth="3" strokeDasharray="8 14"/>
    <g className="tech-rise" stroke="var(--olive)" strokeWidth="2"><path d="M236 134c-14-14 13-22 0-36s13-21 0-34"/><path d="M320 134c-14-14 13-22 0-36s13-21 0-34"/><path d="M404 134c-14-14 13-22 0-36s13-21 0-34"/></g>
  </>;
}

function Klima() {
  return <>
    <g stroke="currentColor" strokeWidth="2"><rect x="166" y="114" width="308" height="232" rx="8"/><rect x="184" y="132" width="272" height="196" rx="4" strokeWidth="1"/><circle cx="320" cy="230" r="86"/><circle cx="320" cy="230" r="13"/>
      <path d="M166 185H86v90h80M474 185h80v90h-80M187 365h266"/>
    </g>
    <g className="tech-fan" stroke="var(--olive)" strokeWidth="2.2"><path d="M322 213c8-30 27-48 45-45 15 2 17 20 7 31-12 14-34 16-52 14Z"/><path d="M337 229c31 0 52 12 55 30 2 15-14 22-28 15-17-8-25-29-27-45Z"/><path d="M317 246c-8 30-27 48-45 45-15-2-17-20-7-31 12-14 34-16 52-14Z"/><path d="M303 231c-31 0-52-12-55-30-2-15 14-22 28-15 17 8 25 29 27 45Z"/></g>
    <g className="tech-flow" stroke="var(--olive)" strokeWidth="2.2" strokeDasharray="7 15"><path d="M62 192h92M62 230h92M62 268h92M486 192h92M486 230h92M486 268h92"/></g>
  </>;
}

function Elektro() {
  return <>
    <g stroke="currentColor" strokeWidth="2"><rect x="157" y="75" width="326" height="322" rx="3"/><path d="M181 112h278M181 170h278M181 255h278M181 340h278"/>
      {[190,234,278,322,366,410].map(x => <g key={x}><rect x={x} y="189" width="30" height="47" rx="2"/><path d={`M${x+8} 205h14M${x+15} 205v13`}/></g>)}
      <rect x="190" y="270" width="105" height="54"/><rect x="316" y="270" width="140" height="54"/><path d="M215 299h54M343 296h25m18 0h21m18 0h6"/>
    </g>
    <path className="tech-trace" d="M123 146h69v41h28m28 0h30v-27h90v27h99v42h54" stroke="var(--olive)" strokeWidth="3" pathLength={1}/>
    <g stroke="var(--olive)" strokeWidth="2"><circle className="tech-pulse" cx="123" cy="146" r="10"/><circle className="tech-pulse tech-delay" cx="521" cy="229" r="10"/></g>
  </>;
}

function Wasser() {
  return <>
    <g stroke="currentColor" strokeWidth="6"><path d="M121 156h147v83h114v99h137"/><path d="M199 156v-68M382 239h95v-80"/></g>
    <path className="tech-flow" d="M121 156h147v83h114v99h137" stroke="var(--olive)" strokeWidth="3.5" strokeDasharray="8 16"/>
    <g stroke="var(--olive)" strokeWidth="2.5"><circle cx="268" cy="156" r="24"/><path d="M244 132l48 48m0-48-48 48"/><path d="M184 88h30m-15-20v20"/></g>
    <path className="tech-drop" d="M477 181c-7 10-18 24-18 34a18 18 0 0 0 36 0c0-10-11-24-18-34Z" stroke="var(--olive)" strokeWidth="2.5"/>
  </>;
}

function Schlosser() {
  return <>
    <g stroke="currentColor" strokeWidth="2.2"><rect x="255" y="117" width="257" height="226" rx="10"/><rect x="282" y="145" width="203" height="170" rx="7" strokeWidth="1"/>
      <circle cx="369" cy="230" r="67"/><circle cx="369" cy="230" r="45"/><path d="M369 193v25m0 24v25"/><path d="M279 135h206M279 325h206" strokeWidth="1"/>
    </g>
    <g className="tech-lock" stroke="var(--olive)" strokeWidth="3"><circle cx="369" cy="230" r="16"/><path d="M369 246v15"/></g>
    <g className="tech-key" stroke="var(--olive)" strokeWidth="3"><circle cx="130" cy="230" r="29"/><circle cx="130" cy="230" r="11"/><path d="M159 230h194m-47 0v21h15v-21m-45 0v15h14v-15"/></g>
    <path className="tech-trace" d="M372 118V86h72" stroke="var(--olive)" strokeWidth="2" pathLength={1}/>
  </>;
}

function Instandhaltung() {
  return <>
    <g stroke="currentColor" strokeWidth="2"><path d="M155 93h330v273H155zM155 180h330M265 93v273M375 180v186"/>
      <path d="M181 115h56v40h-56zM291 211h57v57h-57zM400 212h57v57h-57zM291 294h57v46h-57zM400 294h57v46h-57z" strokeWidth="1.4"/>
    </g>
    <g className="tech-tool" stroke="var(--olive)" strokeWidth="3"><path d="M197 247a36 36 0 0 0 44-44l-20 20-19-8-8-19 20-20a36 36 0 0 0-44 44l-47 47a16 16 0 0 0 23 23Z"/><circle cx="139" cy="280" r="5"/></g>
    <path className="tech-trace" d="M226 275h65v-34h28m29 0h80v79h-108" stroke="var(--olive)" strokeWidth="2.5" pathLength={1}/>
    <g stroke="var(--olive)" strokeWidth="2"><circle className="tech-pulse" cx="319" cy="240" r="12"/><circle className="tech-pulse tech-delay" cx="428" cy="320" r="12"/></g>
  </>;
}

const drawings: Record<ServiceVisualKey, () => ReactNode> = {
  facade: Hausmeister,
  building: Gebaeude,
  heat: Heizung,
  air: Klima,
  electric: Elektro,
  water: Wasser,
  metal: Schlosser,
  grid: Instandhaltung,
};

export function ServiceIllustration({ variant, active = true, compact = false, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (compact || !active) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "80px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [active, compact]);
  const Drawing = drawings[variant];
  return <div ref={ref} className={`technical-visual ${compact ? "technical-visual--compact" : ""} ${active ? "is-active" : ""} ${visible ? "is-visible" : ""} ${className}`} aria-hidden="true">
    <svg viewBox="0 0 640 460" fill="none" strokeLinecap="round" strokeLinejoin="round" focusable="false"><Drawing/></svg>
  </div>;
}
