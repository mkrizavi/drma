import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

type Props = { variant: string; className?: string; priority?: boolean; sizes?: string };

export function ServiceVisual({ variant, className = "", priority = false, sizes }: Props) {
  const photo = photos[(variant in photos ? variant : "hero") as PhotoKey];
  const thumbnail = className.includes("service-thumb");
  const width = thumbnail ? 360 : priority ? 1800 : 1100;
  const src = photo.src.replace(/w=\d+/, `w=${width}`);
  return <div className={`photo-frame ${className}`}>
    <Image src={src} alt={photo.alt} fill priority={priority} unoptimized sizes={sizes ?? (thumbnail ? "90px" : "(max-width: 800px) 100vw, 50vw")} className="photo-image" />
    <span className="photo-tint" aria-hidden="true" />
  </div>;
}
