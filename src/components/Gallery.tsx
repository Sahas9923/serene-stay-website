"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { galleryCategories, galleryImages } from "../lib/data";
import SectionHeading from "./patterns/SectionHeading";

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const images = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  const current = index !== null ? images[index] : null;

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Gallery" title="Take a look around" />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                filter === cat ? "border-maroon bg-maroon text-cream" : "border-caramel/40 text-cocoa hover:border-maroon hover:text-maroon"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 md:columns-3 lg:gap-5">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl lg:mb-5"
              aria-label={`Open photo: ${img.alt}`}
            >
              <Image src={img.src} alt={img.alt} width={img.w} height={img.h} sizes="(min-width: 768px) 33vw, 50vw" className="h-auto w-full transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-brown/70 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <span className="flex w-full items-center justify-between text-left text-sm text-cream">
                  {img.alt}
                  <Expand className="h-4 w-4 shrink-0" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && index !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-brown/95 p-4" onClick={close}>
          <button onClick={close} className="absolute right-5 top-5 rounded-full p-2 text-cream hover:bg-cream/10" aria-label="Close">
            <X className="h-7 w-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 md:left-8"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            <figcaption className="absolute inset-x-0 -bottom-9 text-center text-sm text-cream/80">
              {current.alt} · {index + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 z-10 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20 md:right-8"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}