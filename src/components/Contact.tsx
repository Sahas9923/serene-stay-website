"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { site } from "../lib/data";
import SectionHeading from "./patterns/SectionHeading";
import Lotus from "./patterns/Lotus";

const inputClass =
  "w-full rounded-xl border border-caramel/30 bg-cream px-4 py-3 text-brown placeholder:text-cocoa/40 outline-none transition focus:border-maroon focus:ring-2 focus:ring-maroon/15";

export default function Contact() {
  const [form, setForm] = useState({ name: "", checkIn: "", checkOut: "", guests: "2", message: "" });

  // Worked out only in the browser (Next.js 16 doesn't allow new Date() while pre-rendering)
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Opens WhatsApp with the enquiry filled in (no backend needed)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      "Hello Serene Stay! I'd like to book.",
      `Name: ${form.name}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const contacts = [
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Address", value: site.address, href: "#location" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-sand py-24 md:py-32">
      <Lotus className="animate-spin-slow pointer-events-none absolute -bottom-40 -right-40 h-[480px] w-[480px] text-caramel/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Book your stay"
          title="We'd love to host you"
          subtitle="Send your dates and we'll confirm availability on WhatsApp, usually within the hour."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition hover:shadow-lg hover:shadow-brown/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-maroon text-cream transition group-hover:bg-saffron group-hover:text-brown">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-caramel">{label}</span>
                  <span className="block font-medium text-brown">{value}</span>
                </span>
              </a>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border-2 border-brown py-4 font-semibold text-brown transition hover:bg-brown hover:text-cream"
            >
              Book on Booking.com <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-3xl bg-cream p-7 shadow-xl shadow-brown/10 md:p-10 lg:col-span-3">
            <div className="kandyan-border-thin absolute inset-x-0 top-0" />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-cocoa">Your name</span>
                <input required name="name" value={form.name} onChange={update} placeholder="e.g. Nimal Perera" className={inputClass} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm font-medium text-cocoa">Check-in</span>
                <input required type="date" name="checkIn" min={today || undefined} value={form.checkIn} onChange={update} className={inputClass} />
              </label>
              <label>
                <span className="mb-1.5 block text-sm font-medium text-cocoa">Check-out</span>
                <input required type="date" name="checkOut" min={form.checkIn || today || undefined} value={form.checkOut} onChange={update} className={inputClass} />
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-cocoa">Guests</span>
                <select name="guests" value={form.guests} onChange={update} className={inputClass}>
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests (incl. child)</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-cocoa">Message (optional)</span>
                <textarea name="message" rows={4} value={form.message} onChange={update} placeholder="Arrival time, special requests…" className={inputClass} />
              </label>
            </div>
            <button type="submit" className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-brown py-4 font-semibold text-cream transition hover:bg-maroon">
              <Send className="h-4 w-4" /> Send enquiry via WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-cocoa/60">No payment needed now. You pay at the property.</p>
          </form>
        </div>
      </div>
    </section>
  );
}