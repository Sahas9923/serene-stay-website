/** Lotus mandala: original SVG inspired by Sri Lankan / Kandyan art. Colour = text-* class. */
export default function Lotus({ className = "" }: { className?: string }) {
  const outer = Array.from({ length: 16 }, (_, i) => i * 22.5);
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5);
  const dots = Array.from({ length: 48 }, (_, i) => i * 7.5);

  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle r="97" />
      <circle r="92" strokeDasharray="1 5" strokeLinecap="round" strokeWidth={2.4} />
      {dots.map((a) => (
        <circle key={`d${a}`} cx={0} cy={-86} r={1.5} fill="currentColor" stroke="none" transform={`rotate(${a})`} />
      ))}
      {outer.map((a) => (
        <g key={`o${a}`} transform={`rotate(${a})`}>
          <path d="M0,-80 C16,-62 15,-46 0,-34 C-15,-46 -16,-62 0,-80Z" />
          <path d="M0,-72 L0,-42" strokeWidth={0.8} />
        </g>
      ))}
      {inner.map((a) => (
        <path key={`i${a}`} d="M0,-50 C13,-37 12,-24 0,-16 C-12,-24 -13,-37 0,-50Z" transform={`rotate(${a})`} fill="currentColor" fillOpacity={0.14} />
      ))}
      <circle r="30" strokeDasharray="2 3" />
      <circle r="14" fill="currentColor" fillOpacity={0.18} />
      <circle r="5" fill="currentColor" stroke="none" />
    </svg>
  );
}