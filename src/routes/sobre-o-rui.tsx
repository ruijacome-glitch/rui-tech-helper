import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs, InnerCta } from "@/components/rui/PageShell";
import { MascotBancada } from "@/components/rui/Brand";
import { Reveal } from "@/components/rui/Reveal";
import { sobreTimeline, sobreValores } from "@/data/paginas";

const titulo = "Sobre o Rui | Assistência Informática em Cascais";
const descricao =
  "Informática desde 2006, em Cascais. Suporte a utilizadores, equipamentos, sistemas, redes e infraestruturas, explicado sem linguagem técnica desnecessária.";

export const Route = createFileRoute("/sobre-o-rui")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobrePage,
});

const etiquetasHero = [
  { texto: "A analisar", cor: "text-electric-soft border-electric/45" },
  { texto: "Diagnóstico claro", cor: "text-foreground border-steel/40" },
  { texto: "Desde 2006", cor: "text-orange border-orange/50" },
];

function EtiquetaTecnica({
  texto,
  cor,
  className = "",
}: {
  texto: string;
  cor: string;
  className?: string;
}) {
  return (
    <span
      className={`${cor} ${className} label-tech inline-flex items-center gap-2 rounded-sm border bg-night/90 px-3 py-1.5 backdrop-blur-sm`}
    >
      <span className="inline-block size-1.5 rounded-full bg-current animate-blink" />
      {texto}
    </span>
  );
}

/** Cabo de diagnóstico que entra no hero, contorna a mascote e sai por baixo. */
function CaboHero({ className = "" }: { className?: string }) {
  const d =
    "M 20 0 C 20 90, 6 150, 40 210 C 80 280, 250 250, 330 320 C 400 380, 380 470, 300 520";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 560"
      fill="none"
      preserveAspectRatio="none"
      className={className}
    >
      <path d={d} stroke="var(--color-electric)" strokeOpacity="0.28" strokeWidth="2" />
      <path
        d={d}
        stroke="var(--color-electric-soft)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="18 220"
        className="animate-cable"
      />
    </svg>
  );
}

function SobrePage() {
  return (
    <PageShell>
      {/* HERO — primeira dobra integralmente navy */}
      <section className="relative overflow-hidden bg-night pb-0 pt-12 sm:pt-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_10%,var(--color-navy-line),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,var(--color-navy-mid))]"
        />
        <CaboHero className="pointer-events-none absolute -left-4 top-0 hidden h-[560px] w-[420px] opacity-70 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Breadcrumbs pagina="Sobre o Rui" />

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:gap-10">
            <div className="animate-rise pb-10 lg:pb-24">
              <p className="label-tech text-electric-soft">// Sobre</p>
              <h1 className="mt-4 display-xl text-[clamp(2.1rem,6.4vw,4.2rem)]">
                Tecnologia explicada
                <br />
                como deve ser.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Trabalho em informática desde 2006. Hoje ajudo particulares e pequenos negócios de
                Cascais a resolver problemas sem os transformar num assunto complicado.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {etiquetasHero.map((e) => (
                  <EtiquetaTecnica key={e.texto} texto={e.texto} cor={e.cor} />
                ))}
              </div>
            </div>

            {/* Mascote — dimensão generosa, sem círculo, a ultrapassar a margem inferior */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 bottom-16 top-8 border-l border-t border-electric/20"
              />
              <MascotBancada className="relative z-10 mx-auto w-full max-w-[34rem] translate-y-2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:-mb-10 lg:max-w-none lg:scale-105 lg:origin-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* PERCURSO — navy profundo, cabo continua */}
      <section className="relative overflow-hidden bg-navy-mid py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <p className="label-tech text-electric-soft">// Percurso</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.6rem)]">Desde 2006</h2>

            <ol className="relative mt-10 pl-8">
              <svg
                aria-hidden="true"
                viewBox="0 0 8 400"
                preserveAspectRatio="none"
                className="absolute left-0 top-0 h-full w-2"
              >
                <line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2="400"
                  stroke="var(--color-electric)"
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                <line
                  x1="4"
                  y1="0"
                  x2="4"
                  y2="400"
                  stroke="var(--color-electric-soft)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="20 200"
                  className="animate-cable"
                />
              </svg>

              {sobreTimeline.map((t, i) => (
                <Reveal as="li" key={t.ano} delay={i * 90} className="relative pb-9 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[34px] top-2 size-2.5 rounded-full bg-electric-soft ring-4 ring-electric/15"
                  />
                  <p className="label-tech text-steel">
                    <span className="mr-2 text-electric-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.ano}
                  </p>
                  <p className="mt-2 text-muted-foreground">{t.texto}</p>
                </Reveal>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120} className="self-center">
            <div className="border-l border-electric/30 pl-6">
              <p className="text-lg text-muted-foreground">
                Ao longo destes anos trabalhei com utilizadores e com equipamento de todos os
                feitios: computadores, sistemas, redes e infraestruturas. Foi aí que percebi que a
                parte mais importante não é a técnica — é conseguir explicar.
              </p>
              <p className="mt-5 text-muted-foreground">
                Vivo e trabalho em Cascais. Aparecer no local, olhar para o equipamento e falar com
                quem o usa continua a ser a forma mais rápida de resolver a maioria dos problemas.
              </p>
              <p className="mt-5 text-muted-foreground">
                Apoio particulares e pequenos negócios. Não uso linguagem técnica desnecessária e
                nunca proponho substituir aquilo que ainda não foi diagnosticado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALORES — composição editorial sobre navy, com pausa clara na primeira coluna */}
      <section className="bg-night py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="label-tech text-electric-soft">// Forma de trabalhar</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.75rem)]">
              Quatro regras que não mudo
            </h2>
          </Reveal>

          <ul className="mt-10 grid gap-px bg-electric/15 sm:grid-cols-2">
            {sobreValores.map((v, i) => (
              <Reveal
                as="li"
                key={v.numero}
                delay={i * 80}
                className="group relative bg-navy-mid p-7 transition-colors hover:bg-navy-line sm:p-9"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-px bg-electric/0 transition-colors group-hover:bg-electric"
                />
                <p className="display-xl text-3xl text-electric/50 transition-colors group-hover:text-orange">
                  {v.numero}
                </p>
                <h3 className="mt-4 display-xl text-xl text-foreground">{v.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground sm:text-base">{v.texto}</p>
                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10 bg-electric/50 transition-all duration-300 group-hover:w-24 group-hover:bg-orange"
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pausa editorial clara e curta */}
      <section className="bg-warm py-12 text-warm-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="label-tech text-warm-ink/60">// Cascais e arredores</p>
          <p className="max-w-2xl text-lg">
            Assistência a particulares e pequenos negócios, com explicação antes de qualquer
            intervenção.
          </p>
        </div>
      </section>

      <InnerCta
        titulo="Conhecer os serviços"
        texto="Vê em detalhe o que faço, os sinais mais comuns e quando vale a pena pedir ajuda."
        accao="Conhecer os serviços"
        to="/servicos"
      />
    </PageShell>
  );
}
