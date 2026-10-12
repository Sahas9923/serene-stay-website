import { houseRules } from "../lib/data";
import Reveal from "./patterns/Reveal";
import SectionHeading from "./patterns/SectionHeading";

export default function HouseRules() {
  return (
    <section id="rules" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading eyebrow="Good to know" title="House rules" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {houseRules.map(({ icon: Icon, title, text, allowed }, i) => (
            <Reveal key={title} delay={(i % 4) * 80}>
              <div className="h-full rounded-2xl border border-caramel/25 bg-cream p-6 text-center">
                <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${allowed ? "bg-saffron/15 text-caramel" : "bg-maroon/10 text-maroon"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-brown">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/75">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}