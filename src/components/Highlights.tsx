import { highlights } from "../lib/data";

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="bg-brown text-cream">
      <div className="kandyan-border" />
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {highlights.map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-saffron/50 text-saffron">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm text-cream/90">{label}</span>
          </li>
        ))}
      </ul>
      <div className="kandyan-border" />
    </section>
  );
}