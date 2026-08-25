import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs, InnerCta } from "@/components/rui/PageShell";
import { MascotBancada } from "@/components/rui/Brand";
import { Reveal } from "@/components/rui/Reveal";
import { sobreTimeline, sobreValores } from "@/data/paginas";
import { buildPageHead } from "@/lib/seo";
import { schemaScriptsSobre, breadcrumbScript } from "@/lib/schema";

const titulo = "Sobre o Rui | Assistência Informática em Cascais";
const descricao =
  "Informática desde 2006, em Cascais. Suporte a utilizadores, equipamentos, sistemas, redes e infraestruturas, explicado sem linguagem técnica desnecessária.";

export const Route = createFileRoute("/sobre-o-rui")({
  head: () => ({
    ...buildPageHead({ title: titulo, description: descricao, path: "/sobre-o-rui/", type: "profile" }),
    scripts: [...schemaScriptsSobre, breadcrumbScript("Sobre o Rui", "/sobre-o-rui/")],
  }),
  component: SobrePage,
});

const etiquetasHero = [
  { texto: "A analisar", cor: "text-electric-soft border-electric/45" },
  { texto: "Diagnóstico claro", cor: "text-foreground border-steel/40" },
  { texto: "Desde 2006", cor: "text-orange border-orange/50" },
];

const competencias = [
  "Suporte a utilizadores",
  "Hardware e software",
  "Redes e sistemas",
  "Cópias de segurança",
  "Administração remota",
  "Coordenação técnica",
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

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:gap-10">
            <div className="animate-rise">
              <p className="label-tech text-electric-soft">// Sobre</p>
              <h1 className="mt-4 display-xl text-[clamp(2.1rem,6.4vw,4.2rem)]">
                Tecnologia explicada
                <br />
                como deve ser.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Trabalho em informática desde 2006. A abordagem simples e próxima resulta de quase
                duas décadas a resolver problemas reais: utilizadores confusos, equipamentos que
                falham, sistemas que não respondem e redes instáveis. Hoje aplico essa experiência a
                particulares e pequenos negócios de Cascais, com explicações claras e soluções
                proporcionais ao problema.
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
              <MascotBancada className="relative z-10 mx-auto block h-auto w-full max-w-[22rem] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:max-w-[26rem] lg:max-w-[34rem]" />
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
                O percurso começou em suporte técnico presencial, a diagnosticar hardware e software
                junto de quem usava o equipamento. Ao longo dos anos fui trabalhando com
                computadores, servidores, impressoras, periféricos, redes, cópias de segurança e
                administração remota.
              </p>
              <p className="mt-5 text-muted-foreground">
                Em 2008 passei a coordenar uma equipa local de suporte, sem deixar o trabalho no
                terreno. Mais tarde, como responsável sénior de equipa e especialista técnico
                sénior, acompanhei técnicos juniores e estagiários e lidei com problemas mais
                complexos de sistemas e infraestruturas.
              </p>
              <p className="mt-5 text-muted-foreground">
                A experiência técnica só é útil quando o cliente percebe o problema e a solução.
                Por isso explico primeiro, diagnostico antes de substituir e confirmo tudo contigo
                antes de avançar.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPETÊNCIAS — faixa editorial simples, sem cartões genéricos */}
      <section className="bg-navy-mid py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="label-tech text-electric-soft">// Competências comprovadas</p>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Áreas trabalhadas de forma consistente ao longo dos anos, testadas em contexto real de
              particulares e pequenos negócios — não uma lista de tecnologias soltas.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {competencias.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center gap-2 rounded-sm border border-electric/25 bg-night/60 px-4 py-2 text-sm text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 animate-blink rounded-full bg-electric-soft"
                  />
                  {c}
                </li>
              ))}
            </ul>
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

      {/* Pausa editorial curta */}
      <section className="surface-band section-divider py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="label-tech text-electric-soft">// Cascais e arredores</p>
          <p className="max-w-2xl text-lg text-muted-foreground">
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
