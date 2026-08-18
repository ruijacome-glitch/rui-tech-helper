import { servicos } from "@/data/site";
import { CableLine } from "./Cable";

export function Services() {
  return (
    <section id="servicos" className="bg-night py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <p className="label-tech text-electric-soft">// Serviços</p>
            <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)]">
              O que faço, em português normal.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Sem jargão, sem peças a mais e sem trabalho que não precises.
          </p>
        </div>

        <div className="mt-14 space-y-0">
          {servicos.map((s, i) => (
            <article
              key={s.numero}
              className={`grid items-start gap-4 border-t border-border py-9 sm:gap-10 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:pl-16" : ""
              }`}
            >
              <p className="label-tech text-steel lg:col-span-1">{s.numero}</p>
              <h3 className="display-xl text-2xl leading-tight lg:col-span-4">{s.titulo}</h3>
              <p className="text-lg text-electric-soft lg:col-span-4">{s.beneficio}</p>
              <p className="text-sm text-muted-foreground lg:col-span-3">{s.detalhe}</p>
              {i % 3 === 1 && (
                <CableLine className="h-2 w-full opacity-70 lg:col-span-12" />
              )}
            </article>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
