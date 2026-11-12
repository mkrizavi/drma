import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

export function ServiceVisual({ variant, className = "", priority = false }: { variant: string; className?: string; priority?: boolean }) {
  const photo = photos[(variant in photos ? variant : "hero") as PhotoKey];
  return <div className={`service-photo ${className}`}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 50vw" priority={priority} unoptimized className="service-photo-image"/><span className="service-photo-shade" aria-hidden="true"/></div>;
}
