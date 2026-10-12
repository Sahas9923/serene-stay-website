import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Lotus from "./patterns/Lotus";
import { formatLKR, rates, site } from "../lib/data";

export default function Hero() {
  const fromPrice = Math.min(...rates.map((r) => r.price));

  return (
    <section id="home" className="bg-tile relative overflow-hidden pb-20 pt-32 md:pt-36">
      <Lotus className="animate-spin-slow pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] text-caramel/15" />
      <Lotus className="animate-spin-slow pointer-events-none absolute -bottom-52 right-[30%] hidden h-[420px] w-[420px] text-maroon/10 md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 lg:px-8">
        <div>
          <p className="flex items-center gap-3 text-saffron">
            <span className="font-sinhala text-2xl">ආයුබෝවන්</span>
            <span className="h-px w-10 bg-saffron/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">Welcome</span>
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-brown md:text-6xl lg:text-7xl">
            A peaceful home <span className="italic text-maroon">away</span> from home
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cocoa/80">
            A bright, fully furnished one-bedroom apartment in a quiet, secure corner of Boralesgamuwa, close to Colombo and
            everything you need.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-cocoa/70">
            <MapPin className="h-4 w-4 text-maroon" /> {site.area}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-brown px-8 py-4 font-semibold text-cream shadow-lg shadow-brown/20 transition hover:bg-maroon">
              Book Your Stay
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#gallery" className="rounded-full border-2 border-brown/80 px-8 py-4 font-semibold text-brown transition hover:bg-brown hover:text-cream">
              View Gallery
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 divide-x divide-caramel/30 border-y border-caramel/30 py-5">
            {[
              ["40 m²", "Private space"],
              ["King", "Size bed"],
              ["Free", "WiFi & parking"],
            ].map(([big, small]) => (
              <div key={small} className="px-4 first:pl-0">
                <dt className="font-serif text-2xl text-maroon">{big}</dt>
                <dd className="text-xs uppercase tracking-wider text-cocoa/70">{small}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Arch-shaped photo, like a Sri Lankan temple doorway */}
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-[85%] overflow-hidden rounded-t-full border-[10px] border-sand shadow-2xl shadow-brown/25">
            <Image src="/images/1.jpg" alt="Serene Stay building with palm trees" fill priority sizes="(min-width: 768px) 45vw, 90vw" className="object-cover" />
          </div>

          <div className="absolute -bottom-8 -left-2 w-[48%] overflow-hidden rounded-2xl border-[6px] border-cream shadow-xl md:-left-6">
            <Image src="/images/14.jpg" alt="Bedroom at Serene Stay" width={1024} height={683} sizes="25vw" className="h-auto w-full" />
          </div>

          <div className="absolute -right-1 top-10 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-maroon text-center text-cream shadow-xl ring-4 ring-saffron/70 ring-offset-4 ring-offset-cream md:-right-4">
            <span className="text-[10px] uppercase tracking-widest text-saffron">From</span>
            <span className="font-serif text-lg leading-tight">{formatLKR(fromPrice)}</span>
            <span className="text-[10px] uppercase tracking-widest text-cream/70">per night</span>
          </div>
        </div>
      </div>
    </section>
  );
}