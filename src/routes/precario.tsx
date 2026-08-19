import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumbs, InnerCta } from "@/components/rui/PageShell";
import { Reveal } from "@/components/rui/Reveal";
import { precos, precarioAreas, notasPrecario } from "@/data/site";
import precarioHeroAsset from "@/assets/precario-hero.png.asset.json";

const titulo = "Preçário | O Rui dos Computadores — Cascais";
const descricao =
  "Cada problema é avaliado antes de avançar: diagnóstico, assistência remota, assistência ao domicílio e outras áreas de intervenção em Cascais, com valor confirmado antes da intervenção.";

export const Route = createFileRoute("/precario")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/precario" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/precario" }],
  }),
  component: PrecarioPage,
});

const etiquetas = [
  { texto: "Equipamento avaliado", cor: "text-electric-soft border-electric/45" },
  { texto: "Valor confirmado", cor: "text-foreground border-steel/40" },
  { texto: "Sem surpresas", cor: "text-orange border-orange/50" },
];

function Etiqueta({ texto, cor, className = "" }: { texto: string; cor: string; className?: string }) {
  return (
    <span
      className={`${cor} ${className} label-tech inline-flex items-center gap-2 rounded-sm border bg-night/90 px-3 py-1.5 backdrop-blur-sm`}
    >
      <span className="inline-block size-1.5 rounded-full bg-current motion-safe:animate-blink" />
      {texto}
    </span>
  );
}

/** Cabo de diagnóstico que atravessa a zona de avaliação e desce para a lista. */
function CaboPrecario({ className = "" }: { className?: string }) {
  const d = "M 18 0 C 18 100, 4 170, 46 240 C 96 320, 260 290, 336 366 C 402 432, 372 500, 292 560";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 420 580"
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
        className="motion-safe:animate-cable"
      />
    </svg>
  );
}

/** Continuação vertical do cabo, a ligar o hero à lista de preços. */
function CaboLigacao({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 220" fill="none" preserveAspectRatio="none" className={className}>
      <path
        d="M 20 0 C 20 70, 6 120, 20 220"
        stroke="var(--color-electric)"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <path
        d="M 20 0 C 20 70, 6 120, 20 220"
        stroke="var(--color-electric-soft)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="14 180"
        className="motion-safe:animate-cable"
      />
    </svg>
  );
}

function PrecarioPage() {
  return (
    <PageShell>
      {/* HERO — navy dominante, mascote à direita, sem círculo nem texto sobreposto */}
      <section className="relative overflow-hidden bg-night pb-0 pt-12 sm:pt-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_82%_8%,var(--color-navy-line),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,var(--color-navy-mid))]"
        />
        <CaboPrecario className="pointer-events-none absolute -left-4 top-0 hidden h-[580px] w-[420px] opacity-70 lg:block" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Breadcrumbs pagina="Preçário" />

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:gap-10">
            <div className="motion-safe:animate-rise pb-8 lg:pb-24">
              <p className="label-tech text-electric-soft">// Preçário</p>
              <h1 className="mt-4 display-xl text-[clamp(2.1rem,6.4vw,4.2rem)]">
                Preços claros.
                <br />
                Sem surpresas.
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Cada problema é avaliado antes de avançar. Explico o que é necessário, confirmo o
                valor contigo e só depois começo a intervenção.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {etiquetas.map((e) => (
                  <Etiqueta key={e.texto} texto={e.texto} cor={e.cor} />
                ))}
              </div>
            </div>

            {/* Ilustração de hero do Preçário — dimensão generosa, sem fundo circular */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-x-6 bottom-14 top-8 border-l border-t border-electric/20"
              />
              <img
                src={precarioHeroAsset.url}
                alt="Rui a apresentar o preçário digital com planos e soluções de informática em Cascais"
                className="relative z-10 mx-auto w-full max-w-[34rem] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] lg:-mb-8 lg:max-w-none"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LISTA PRINCIPAL — composição editorial navy */}
      <section className="relative overflow-hidden bg-navy-mid py-16 sm:py-24">
        <CaboLigacao className="pointer-events-none absolute left-6 top-0 hidden h-56 w-10 opacity-60 lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="label-tech text-electric-soft">// Intervenções base</p>
            <h2 className="mt-4 display-xl text-[clamp(1.7rem,4.6vw,2.8rem)]">
              O que é avaliado e confirmado
            </h2>
          </Reveal>

          <ul className="mt-12 border-t border-electric/15">
            {precos.map((p, i) => (
              <Reveal as="li" key={p.servico} delay={i * 90}>
                <div className="group grid gap-3 border-b border-electric/15 py-8 transition-colors hover:bg-night/60 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8 sm:px-2">
                  <span className="display-xl text-[clamp(1.8rem,5vw,3rem)] leading-none text-electric/35 transition-colors group-hover:text-electric/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display-xl text-[clamp(1.2rem,3.2vw,1.8rem)]">{p.servico}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.nota}</p>
                  </div>
                  <span className="label-tech inline-flex items-center gap-2 whitespace-nowrap rounded-sm border border-electric/40 px-3 py-2 text-electric-soft transition-colors group-hover:border-orange/60 group-hover:text-orange sm:justify-self-end">
                    <span className="inline-block size-1.5 rounded-full bg-current" />
                    {p.valor}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PAUSA EDITORIAL — curta, navy */}
      <section className="bg-night py-12 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="label-tech text-electric-soft">// Princípio</p>
          <p className="mt-4 display-xl text-[clamp(1.3rem,3.6vw,2rem)] text-foreground">
            Nada avança sem tu saberes quanto custa.
          </p>
        </div>
      </section>

      {/* OUTRAS ÁREAS */}
      <section className="bg-night py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="label-tech text-electric-soft">// Outras áreas</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.6rem)]">
              Áreas de intervenção adicionais
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px bg-electric/15 sm:grid-cols-2">
            {precarioAreas.map((a, i) => (
              <Reveal key={a.titulo} delay={i * 80}>
                <div className="h-full bg-night p-6 transition-colors hover:bg-navy-mid sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="display-xl text-lg">{a.titulo}</h3>
                    <span className="label-tech text-orange">{a.valor}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.nota}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTAS */}
      <section className="bg-navy-mid py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <p className="label-tech text-electric-soft">// Como funciona o valor</p>
            <h2 className="mt-4 display-xl text-[clamp(1.4rem,4vw,2.2rem)]">
              Quatro regras simples
            </h2>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {notasPrecario.map((n, i) => (
              <Reveal as="li" key={n} delay={i * 70}>
                <div className="flex gap-4 border-l-2 border-electric/40 pl-4 transition-colors hover:border-orange">
                  <span className="label-tech shrink-0 text-electric/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-muted-foreground">{n}</p>
                </div>
              </Reveal>
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
