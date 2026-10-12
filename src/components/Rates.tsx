import { BadgeCheck, Check } from "lucide-react";
import { bookingPerks, formatLKR, rates, site } from "../lib/data";
import Reveal from "./patterns/Reveal";
import SectionHeading from "./patterns/SectionHeading";
import Lotus from "./patterns/Lotus";

export default function Rates() {
  return (
    <section id="rates" className="relative overflow-hidden bg-brown py-24 text-cream md:py-32">
      <div className="kandyan-border absolute inset-x-0 top-0" />
      <Lotus className="animate-spin-slow pointer-events-none absolute -left-48 top-1/3 h-[520px] w-[520px] text-saffron/10" />
      <Lotus className="animate-spin-slow pointer-events-none absolute -right-48 -top-20 h-[420px] w-[420px] text-saffron/10" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeading light eyebrow="Rates" title="Simple, honest pricing" subtitle="Per night, for the entire apartment. Taxes and charges are shown separately." />

        <div className="grid gap-8 md:grid-cols-2">
          {rates.map((rate, i) => (
            <Reveal key={rate.name} delay={i * 150}>
              <article className={`relative h-full rounded-3xl p-8 md:p-10 ${rate.featured ? "bg-cream text-brown shadow-2xl shadow-black/30" : "border border-cream/20 bg-cocoa/40"}`}>
                {rate.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-saffron px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brown">
                    Most popular
                  </span>
                )}
                <h3 className="font-serif text-2xl">{rate.name}</h3>
                <p className={`mt-1 text-sm ${rate.featured ? "text-cocoa/70" : "text-cream/70"}`}>{rate.guests}</p>

                <p className="mt-6 flex items-end gap-2">
                  <span className={`font-serif text-5xl ${rate.featured ? "text-maroon" : "text-saffron"}`}>{formatLKR(rate.price)}</span>
                  <span className={`pb-1.5 text-sm ${rate.featured ? "text-cocoa/70" : "text-cream/70"}`}>/ night</span>
                </p>
                <p className={`mt-1 text-sm ${rate.featured ? "text-cocoa/70" : "text-cream/60"}`}>+ {formatLKR(rate.taxes)} taxes & charges</p>

                <ul className="mt-8 space-y-3">
                  {rate.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className={`h-4 w-4 ${rate.featured ? "text-maroon" : "text-saffron"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 block rounded-full py-3.5 text-center font-semibold transition ${
                    rate.featured ? "bg-brown text-cream hover:bg-maroon" : "border border-cream/60 text-cream hover:bg-cream hover:text-brown"
                  }`}
                >
                  Book this rate
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-cream/85">
          {bookingPerks.map((perk) => (
            <li key={perk} className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-saffron" /> {perk}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-cream/60">
          Prices may vary by date and season. Also bookable on{" "}
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-saffron underline-offset-4 hover:underline">
            Booking.com
          </a>
          .
        </p>
      </div>
      <div className="kandyan-border absolute inset-x-0 bottom-0" />
    </section>
  );
}