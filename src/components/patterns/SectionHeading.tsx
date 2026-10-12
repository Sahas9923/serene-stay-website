import Lotus from "./Lotus";

type Props = { eyebrow: string; title: string; subtitle?: string; light?: boolean; align?: "center" | "left" };

export default function SectionHeading({ eyebrow, title, subtitle, light = false, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <div className={`mb-14 ${centered ? "mx-auto max-w-2xl text-center" : ""}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-saffron" : "text-caramel"}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-serif text-4xl leading-tight md:text-5xl ${light ? "text-cream" : "text-brown"}`}>{title}</h2>
      <div className={`mt-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className={`h-px w-12 ${light ? "bg-saffron/60" : "bg-caramel/60"}`} />
        <Lotus className={`h-6 w-6 ${light ? "text-saffron" : "text-maroon"}`} />
        <span className={`h-px w-12 ${light ? "bg-saffron/60" : "bg-caramel/60"}`} />
      </div>
      {subtitle && <p className={`mt-5 leading-relaxed ${light ? "text-cream/75" : "text-cocoa/80"}`}>{subtitle}</p>}
    </div>
  );
}