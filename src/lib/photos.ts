/** Photography outside the service illustration system. No image depicts DRMA staff, work, or a Munich property. */
export const photos = {
  hero: { src: "https://images.unsplash.com/photo-1775733924031-521cd86c69cc?auto=format&fit=crop&w=1800&q=82", alt: "Modernes Wohngebäude mit begrünten Balkonen", source: "https://unsplash.com/photos/modern-apartment-building-with-balconies-and-greenery-otrBpvmVmNk", credit: "Aalo Lens" },
  about: { src: "https://images.unsplash.com/photo-1774921676494-1ad559577022?auto=format&fit=crop&w=1400&q=80", alt: "Heller, moderner gemeinschaftlicher Innenbereich mit viel Tageslicht", source: "https://unsplash.com/photos/bright-modern-interior-with-natural-light-and-architectural-details-0-kn8pIx0oY", credit: "Madeline Liu" },
  building: { src: "https://images.unsplash.com/photo-1758193431351-68538bf55ec3?auto=format&fit=crop&w=1400&q=80", alt: "Zeitgenössisches Wohngebäude mit begrünten Balkonen und verglastem Eingangsbereich", source: "https://unsplash.com/photos/modern-apartment-building-with-balconies-and-greenery-B9OMpxCdrlc", credit: "Aalo Lens" },
} as const;
export type PhotoKey = keyof typeof photos;
