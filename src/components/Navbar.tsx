"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../lib/data";
import Lotus from "./patterns/Lotus";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter((s): s is Element => !!s);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream/90 shadow-[0_8px_30px_-12px_rgba(62,42,30,0.35)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="kandyan-border-thin" />
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group flex items-center gap-2.5">
            <Lotus className="h-9 w-9 text-maroon transition-transform duration-700 group-hover:rotate-90" />
            <span className="leading-none">
              <span className="block font-serif text-2xl font-semibold text-brown">Serene Stay</span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-caramel">Boralesgamuwa</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === link.href ? "text-maroon" : "text-cocoa hover:text-maroon"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-saffron transition-transform duration-300 ${
                      active === link.href ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full bg-brown px-6 py-2.5 text-sm font-semibold text-cream transition hover:bg-maroon sm:inline-block">
              Book Now
            </a>
            <button onClick={() => setOpen(true)} className="rounded-full p-2 text-brown hover:bg-sand lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-brown/50 backdrop-blur-sm transition-opacity lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`bg-tile fixed right-0 top-0 z-50 flex h-dvh w-[82%] max-w-sm flex-col overflow-hidden bg-cream shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="kandyan-border-thin" />
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-serif text-2xl text-brown">Menu</span>
          <button onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-sand" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <ul className="flex-1 space-y-1 px-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 font-serif text-xl transition ${active === link.href ? "bg-sand text-maroon" : "text-brown hover:bg-sand"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-6">
          <a href="#contact" onClick={() => setOpen(false)} className="block rounded-full bg-brown py-3.5 text-center font-semibold text-cream hover:bg-maroon">
            Book Now
          </a>
        </div>
        <Lotus className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 text-caramel/15" />
      </aside>
    </>
  );
}