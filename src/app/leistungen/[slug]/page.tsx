import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { services, getService } from "@/lib/content";
import { ServiceVisual } from "@/components/service-visual";
import { Reveal } from "@/components/reveal";
import { PhotoReveal } from "@/components/photo-reveal";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const service = getService(slug); if (!service) return {}; return { title: `${service.title} in München und Umgebung`, description: `${service.short} ${service.description}`.slice(0,160), openGraph: { title: `${service.title} | DRMA Haus- & Gebäudeservice`, description: service.short, locale: "de_DE" } }; }

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.related.map(getService).filter((item): item is NonNullable<typeof item> => Boolean(item));
  return <>
    <section className={`detail-hero detail-${service.visual}`}><div className="shell"><nav className="breadcrumb" aria-label="Brotkrumennavigation"><Link href="/">Startseite</Link><ChevronRight size={14}/><Link href="/leistungen">Leistungen</Link><ChevronRight size={14}/><span aria-current="page">{service.title}</span></nav><div className="detail-hero-grid"><div><span className="eyebrow eyebrow-light">DRMA · LEISTUNGEN</span><h1>{service.title}</h1><p>{service.intro}</p><Link className="button button-olive" href={`/kontakt?leistung=${service.slug}`}>Leistung anfragen <ArrowUpRight size={19}/></Link></div><PhotoReveal><ServiceVisual variant={service.visual} priority sizes="(max-width: 800px) 100vw, 47vw"/></PhotoReveal></div></div></section>
    <section className="section detail-overview"><div className="shell overview-grid"><Reveal><div><span className="eyebrow">IM ÜBERBLICK</span><h2>Aufmerksam.<br/><em>Abgestimmt.</em></h2></div></Reveal><Reveal><p className="overview-lead">{service.description}</p></Reveal></div><div className="shell detail-columns"><div><span className="eyebrow">MÖGLICHE AUFGABEN</span>{service.examples.map(item => <div className="detail-line" key={item}><span>{item}</span><ArrowUpRight size={17}/></div>)}</div><div><span className="eyebrow">IHR VORTEIL</span>{service.benefits.map(item => <div className="detail-line" key={item}><span>{item}</span><ArrowUpRight size={17}/></div>)}</div></div></section>
    <section className="section related-section"><div className="shell"><span className="eyebrow">WEITERE LEISTUNGEN</span><h2>Das könnte auch<br/><em>relevant sein.</em></h2><div className="related-grid">{related.map(item => <Link key={item.slug} href={`/leistungen/${item.slug}`}><ServiceVisual variant={item.visual} sizes="(max-width: 800px) 100vw, 43vw"/><span>{item.title}<ArrowUpRight size={19}/></span></Link>)}</div></div></section>
    <section className="closing-section"><div className="shell closing-grid"><div><span className="eyebrow eyebrow-light">SPRECHEN WIR ÜBER IHR OBJEKT</span><h2>Was braucht<br/><em>Ihre Immobilie?</em></h2></div><div><p>Beschreiben Sie Ihr Anliegen. Wir klären gemeinsam, welcher nächste Schritt sinnvoll ist.</p><Link href={`/kontakt?leistung=${service.slug}`} className="button button-olive">Anfrage stellen <ArrowRight size={19}/></Link></div></div></section>
  </>;
}
