import { amenityGroups } from "../lib/data";
import Reveal from "./patterns/Reveal";
import SectionHeading from "./patterns/SectionHeading";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-tile relative bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything you need to feel at home"
          subtitle="Thoughtfully equipped for short getaways, work trips and longer stays alike."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenityGroups.map(({ icon: Icon, title, items }, i) => (
            <Reveal key={title} delay={(i % 4) * 100}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-caramel/20 bg-cream p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brown/10">
                <div className="kandyan-border-thin absolute inset-x-0 top-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon/10 text-maroon transition group-hover:bg-maroon group-hover:text-cream">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-brown">{title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-cocoa/80">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rotate-45 bg-saffron" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}