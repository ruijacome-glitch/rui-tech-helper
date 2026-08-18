import { useEffect, useRef, useState } from "react";
import { passos } from "@/data/site";
import { CableLine } from "./Cable";

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visiveis, setVisiveis] = useState(0);

  useEffect(() => {
    const nodes = ref.current?.querySelectorAll("[data-passo]");
    if (!nodes) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset["passo"]);
            setVisiveis((v) => Math.max(v, idx + 1));
          }
        });
      },
      { threshold: 0.5 },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="relative bg-night py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6" ref={ref}>
        <p className="label-tech text-electric-soft">02 // Como funciona</p>
        <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)]">Três passos. Sem mistério.</h2>

        <CableLine className="mt-14 hidden h-2 w-full md:block" />

        <ol className="mt-6 grid gap-10 md:grid-cols-3 md:gap-8">
          {passos.map((p, i) => (
            <li
              key={p.numero}
              data-passo={i}
              className={`transition-all duration-700 ${
                visiveis > i ? "opacity-100 translate-y-0" : "opacity-40 translate-y-3"
              }`}
            >
              <span
                className={`grid size-16 place-items-center rounded-full border font-mono text-lg ${
                  visiveis > i
                    ? "border-electric text-electric-soft electric-glow"
                    : "border-border text-steel"
                }`}
              >
                {p.numero}
              </span>
              <h3 className="mt-6 display-xl text-2xl">{p.titulo}</h3>
              <p className="mt-3 max-w-xs text-muted-foreground">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
