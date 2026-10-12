import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "../lib/data";
import Lotus from "./patterns/Lotus";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brown text-cream">
      <div className="kandyan-border" />
      <Lotus className="pointer-events-none absolute -right-24 -top-10 h-80 w-80 text-saffron/10" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Lotus className="h-10 w-10 text-saffron" />
            <span className="font-serif text-2xl">Serene Stay</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            A peaceful, fully furnished apartment in Rattanapitiya, Boralesgamuwa. Your home away from home, close to Colombo.
          </p>
          <p className="mt-4 font-sinhala text-saffron">ආයුබෝවන්</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">Explore</h4>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream/75 transition hover:text-saffron">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-saffron">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> {site.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-saffron" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-saffron">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-saffron" />
              <a href={`mailto:${site.email}`} className="hover:text-saffron">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © 2026 Serene Stay, Boralesgamuwa. All rights reserved.
      </div>
    </footer>
  );
}