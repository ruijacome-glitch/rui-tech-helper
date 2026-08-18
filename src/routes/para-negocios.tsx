import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, InnerCta } from "@/components/rui/PageShell";
import { negociosAreas, negociosQuando, negociosModelo } from "@/data/paginas";

const titulo = "Informática para Pequenos Negócios em Cascais | O Rui dos Computadores";
const descricao =
  "Apoio informático a lojas, ateliês, clínicas e escritórios de Cascais: postos de trabalho, redes Wi-Fi, impressoras, instalação e resolução de avarias.";

export const Route = createFileRoute("/para-negocios")({
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
  component: NegociosPage,
});

/** Cenário editorial de um pequeno negócio — pontos de diagnóstico ligados por linhas. */
function CenarioNegocio() {
  const pontos = [
    { x: 18, y: 30, label: "Posto de trabalho" },
    { x: 52, y: 18, label: "Router / Wi-Fi" },
    { x: 82, y: 38, label: "Impressora" },
    { x: 38, y: 66, label: "Caixa / recepção" },
    { x: 72, y: 74, label: "Cópias de segurança" },
  ];
  return (
    <div className="relative aspect-[4/3] w-full border border-border bg-night-soft">
      <svg
        viewBox="0 0 100 75"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 size-full"
      >
        <g stroke="var(--color-electric)" strokeOpacity="0.35" strokeWidth="0.3" fill="none">
          <path d="M18 22 L52 13 L82 28 M52 13 L38 50 L72 55" />
          <path d="M0 62 H100 M0 40 H100" strokeOpacity="0.1" />
        </g>
      </svg>
      {pontos.map((p) => (
        <div
          key={p.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <span className="block size-2.5 rounded-full bg-electric-soft shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-electric)_25%,transparent)]" />
          <span className="label-tech mt-2 block whitespace-nowrap text-[0.6rem] text-steel">
            {p.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function NegociosPage() {
  return (
    <PageShell>
      <PageHero
        pagina="Para negócios"
        etiqueta="// Pequenos negócios de Cascais"
        titulo={
          <>
            A informática não pode
            <br />
            parar o teu negócio.
          </>
        }
        intro="Lojas, ateliês, clínicas e escritórios pequenos. Falas comigo directamente, sem departamentos nem intermediários."
        aside={<CenarioNegocio />}
      />

      <section className="bg-warm py-16 text-warm-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="label-tech text-electric">// Áreas</p>
          <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.75rem)]">
            No que posso ajudar
          </h2>
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {negociosAreas.map((a) => (
              <li
                key={a.numero}
                className="flex gap-5 border-b border-warm-ink/15 py-6 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="label-tech shrink-0 pt-1 text-warm-ink/50">{a.numero}</span>
                <div>
                  <h3 className="display-xl text-lg">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-warm-ink/75">{a.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-night py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="label-tech text-electric-soft">// Situações reais</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.6rem)]">
              Quando precisas do Rui
            </h2>
            <ul className="mt-8 space-y-3">
              {negociosQuando.map((q) => (
                <li key={q} className="border-l-2 border-orange/60 pl-4 text-muted-foreground">
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-tech text-electric-soft">// Como trabalhamos</p>
            <div className="mt-8 space-y-6">
              {negociosModelo.map((m) => (
                <div key={m.titulo} className="border border-border bg-night-soft p-6">
                  <h3 className="display-xl text-lg text-electric-soft">{m.titulo}</h3>
                  <p className="mt-3 text-muted-foreground">{m.texto}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-steel">
              Não existem, para já, planos mensais, contratos ou tempos de resposta garantidos.
              Quando existirem, estarão aqui escritos.
            </p>
          </div>
        </div>
      </section>

      <InnerCta
        titulo="Falar sobre o meu negócio"
        texto="Diz-me o que tens montado e o que costuma falhar. A partir daí vemos o que faz sentido."
        accao="Falar sobre o meu negócio"
        to="/contactos"
        search={{ problema: "Pequeno negócio" }}
      />
    </PageShell>
  );
}
