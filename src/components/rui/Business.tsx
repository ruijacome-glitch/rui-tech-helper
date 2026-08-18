import { Check } from "lucide-react";
import { negocios } from "@/data/site";

export function Business() {
  return (
    <section id="negocios" className="bg-warm py-20 text-warm-ink sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="label-tech text-electric">// Negócios</p>
          <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)]">{negocios.titulo}</h2>
          <p className="mt-6 max-w-xl text-lg text-warm-ink/80">{negocios.texto}</p>
          <a
            href="#contactos"
            className="mt-8 inline-flex min-h-12 items-center rounded-sm bg-night px-6 font-semibold uppercase tracking-wide text-foreground transition-transform hover:-translate-y-0.5"
          >
            {negocios.cta}
          </a>
        </div>
        <ul className="self-center divide-y divide-warm-ink/15 border-y border-warm-ink/15">
          {negocios.pontos.map((p) => (
            <li key={p} className="flex items-center gap-4 py-5">
              <Check className="size-5 shrink-0 text-electric" aria-hidden="true" />
              <span className="min-w-0 text-lg">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
