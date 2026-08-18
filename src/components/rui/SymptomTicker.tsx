import { sintomasTicker } from "@/data/site";

export function SymptomTicker() {
  const linha = [...sintomasTicker, ...sintomasTicker];
  return (
    <div
      className="group relative overflow-hidden border-y border-border bg-night-soft py-3"
      aria-label={`Sintomas frequentes: ${sintomasTicker.join(", ")}`}
    >
      <div className="flex w-max animate-marquee gap-8 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {linha.map((s, i) => (
          <span key={`${s}-${i}`} className="label-tech flex items-center gap-8 text-steel">
            <span className="text-foreground">{s}</span>
            <span aria-hidden="true" className="text-orange">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
