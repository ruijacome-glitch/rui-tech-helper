import { useState } from "react";
import { Gauge, Wifi, Power, FileSearch, LifeBuoy, ArrowRight } from "lucide-react";
import { sintomas } from "@/data/site";

const icones = {
  lento: Gauge,
  wifi: Wifi,
  power: Power,
  ficheiros: FileSearch,
  ajuda: LifeBuoy,
} as const;

export function Symptoms() {
  const [activo, setActivo] = useState<string | null>(null);
  const seleccionado = sintomas.find((s) => s.id === activo) ?? null;

  return (
    <section id="sintomas" className="bg-warm py-20 text-warm-ink sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="label-tech text-electric">01 // Sintomas</p>
        <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)] text-warm-ink">
          Diz-me o que se passa.
        </h2>

        <ul className="mt-12 divide-y divide-warm-ink/15 border-y border-warm-ink/15">
          {sintomas.map((s) => {
            const Icone = icones[s.icone];
            const isActivo = activo === s.id;
            return (
              <li key={s.id}>
                <button
                  type="button"
                  aria-pressed={isActivo}
                  onClick={() => setActivo(s.id)}
                  className={`group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-6 text-left transition-colors sm:gap-8 ${
                    isActivo ? "text-electric" : "hover:text-electric"
                  }`}
                >
                  <span className="label-tech w-8 shrink-0 text-warm-ink/50">{s.numero}</span>
                  <span className="flex min-w-0 items-center gap-4">
                    <Icone className="size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span className="display-xl text-[clamp(1.25rem,4vw,2.25rem)]">{s.titulo}</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div
          aria-live="polite"
          className="mt-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
        >
          <p className="label-tech min-w-0 text-warm-ink/70">
            {seleccionado
              ? `RUI: ${seleccionado.nota}`
              : "RUI: selecciona um sintoma para começarmos."}
          </p>
          {seleccionado && (
            <a
              href="#contactos"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-electric px-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
            >
              Pedir ajuda sobre isto
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
