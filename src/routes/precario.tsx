import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, InnerCta } from "@/components/rui/PageShell";
import { precos, precarioAreas, notasPrecario } from "@/data/site";

const titulo = "Preçário | O Rui dos Computadores — Cascais";
const descricao =
  "Preços claros e confirmados antes de avançar: diagnóstico, assistência remota, assistência ao domicílio e outras áreas de intervenção em Cascais.";

export const Route = createFileRoute("/precario")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrecarioPage,
});

function PrecarioPage() {
  return (
    <PageShell>
      <PageHero
        claro
        pagina="Preçário"
        etiqueta="// Preçário"
        titulo={
          <>
            Preços claros.
            <br />
            Sem surpresas.
          </>
        }
        intro="Enquanto os valores finais não estiverem fechados, aparece “Valor a confirmar”. Prefiro isso a inventar números."
      />

      <section className="bg-warm pb-16 text-warm-ink sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <ul className="border-t border-warm-ink/20">
            {precos.map((p, i) => (
              <li
                key={p.servico}
                className="grid gap-2 border-b border-warm-ink/20 py-7 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
              >
                <span className="label-tech text-warm-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="display-xl text-[clamp(1.3rem,3.5vw,2rem)]">{p.servico}</h2>
                  <p className="mt-2 text-sm text-warm-ink/70">{p.nota}</p>
                </div>
                <span className="label-tech whitespace-nowrap text-electric">{p.valor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-night py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="label-tech text-electric-soft">// Outras áreas</p>
          <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.6rem)]">
            Já preparadas, a aguardar valores
          </h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {precarioAreas.map((a) => (
              <div key={a.titulo} className="bg-night p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="display-xl text-lg">{a.titulo}</h3>
                  <span className="label-tech text-orange">{a.valor}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{a.nota}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night-soft py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display-xl text-[clamp(1.4rem,4vw,2.2rem)]">Como funciona o valor</h2>
          <ul className="mt-8 space-y-4">
            {notasPrecario.map((n) => (
              <li key={n} className="border-l-2 border-electric/40 pl-4 text-muted-foreground">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InnerCta
        titulo="Pedir avaliação"
        texto="Descreve o problema e digo-te o que envolve antes de qualquer intervenção."
        accao="Pedir avaliação"
        to="/contactos"
      />
    </PageShell>
  );
}
