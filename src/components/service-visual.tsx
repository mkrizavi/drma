import Image from "next/image";
import { photos, type PhotoKey } from "@/lib/photos";

type Props = { variant: PhotoKey; className?: string; priority?: boolean; sizes?: string };

export function ServiceVisual({ variant, className = "", priority = false, sizes }: Props) {
  const photo = photos[variant];
  const width = priority ? 1800 : 1100;
  const src = photo.src.replace(/w=\d+/, `w=${width}`);
  return <div className={`photo-frame ${className}`}>
    <Image src={src} alt={photo.alt} fill priority={priority} unoptimized sizes={sizes ?? "(max-width: 800px) 100vw, 50vw"} className="photo-image" />
    <span className="photo-tint" aria-hidden="true" />
  </div>;
}
