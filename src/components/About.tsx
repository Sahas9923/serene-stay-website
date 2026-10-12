import Image from "next/image";
import { Check } from "lucide-react";
import { aboutPoints } from "../lib/data";
import Reveal from "./patterns/Reveal";
import SectionHeading from "./patterns/SectionHeading";
import Lotus from "./patterns/Lotus";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <Lotus className="pointer-events-none absolute -right-32 top-10 h-96 w-96 text-caramel/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <div className="grid grid-cols-5 gap-4">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-b-3xl rounded-t-[999px]">
              <Image src="/images/7.jpg" alt="Bedroom with timber beams" fill sizes="(min-width:1024px) 30vw, 60vw" className="object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src="/images/5.jpg" alt="Living area" fill sizes="20vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/13.jpg" alt="Courtyard entrance with plants" fill sizes="20vw" className="object-cover" />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-saffron/40 bg-cream px-6 py-4 shadow-xl">
            <p className="font-serif text-3xl text-maroon">100%</p>
            <p className="text-xs uppercase tracking-widest text-cocoa/70">Private apartment</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading align="left" eyebrow="The Apartment" title="Quiet, clean & secure, with a touch of everyday Sri Lankan life" />
          <div className="-mt-6 space-y-5 leading-relaxed text-cocoa/85">
            <p>
              Serene Stay offers a comfortable, furnished apartment in a peaceful residential setting in Rattanapitiya,
              Boralesgamuwa. Unwind in a bedroom with a king-size bed, good natural light and ventilation, a private
              balcony, a cosy living area, a clean bathroom and your own kitchen.
            </p>
            <p>
              With its quiet, homely atmosphere and practical facilities, it&apos;s an ideal home away from home, close to
              Colombo and to supermarkets, banks, pharmacies, cafés and local shops.
            </p>
          </div>
          <ul className="mt-8 space-y-3">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon text-cream">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-cocoa">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}