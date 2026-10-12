import Image from "next/image";
import { MapPin } from "lucide-react";
import { nearby, site } from "../lib/data";
import Reveal from "./patterns/Reveal";
import SectionHeading from "./patterns/SectionHeading";

const neighbourhoodPhotos = [
  { src: "/images/12.jpg", alt: "Boralesgamuwa lake" },
  { src: "/images/6.jpg", alt: "Lakeside walking track" },
  { src: "/images/22.jpg", alt: "Birds by the canal" },
  { src: "/images/23.jpg", alt: "Shaded path by the water" },
];

export default function Location() {
  return (
    <section id="location" className="bg-tile bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Location"
          title="Local life, minutes from Colombo"
          subtitle="A quiet residential neighbourhood with temples, a lakeside walking track, cafés and everyday shops nearby, and easy connections into the city."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl border-[6px] border-cream shadow-xl">
              <iframe src={site.mapEmbed} title="Serene Stay location map" className="h-full min-h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-cocoa">
              <MapPin className="h-4 w-4 text-maroon" /> {site.address}
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {nearby.map(({ icon: Icon, title, places }, i) => (
              <Reveal key={title} delay={(i % 2) * 120}>
                <div className="h-full rounded-2xl bg-cream p-6">
                  <h3 className="flex items-center gap-3 font-serif text-lg text-brown">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-maroon/10 text-maroon">
                      <Icon className="h-4 w-4" />
                    </span>
                    {title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {places.map((p) => (
                      <li key={p.name} className="flex justify-between gap-4 border-b border-dashed border-caramel/30 pb-2 last:border-0">
                        <span className="text-cocoa/85">{p.name}</span>
                        {p.distance && <span className="shrink-0 font-medium text-caramel">{p.distance}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {neighbourhoodPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}