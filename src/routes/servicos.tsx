import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell, PageHero, InnerCta } from "@/components/rui/PageShell";
import { CableLine } from "@/components/rui/Cable";
import { MascotPlaceholder } from "@/components/rui/Brand";
import { servicosDetalhe } from "@/data/paginas";

const titulo = "Serviços de Assistência Informática em Cascais | O Rui dos Computadores";
const descricao =
  "Reparação, limpeza e optimização, instalação, recuperação de dados, apoio remoto e redes Wi-Fi para particulares e pequenos negócios em Cascais.";

export const Route = createFileRoute("/servicos")({
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
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <PageShell>
      <PageHero
        pagina="Serviços"
        etiqueta="// Serviços"
        titulo={
          <>
            Problemas diferentes.
            <br />
            Respostas à medida.
          </>
        }
        intro="Assistência informática para particulares e pequenos negócios em Cascais e arredores. Ao domicílio ou remota, com diagnóstico antes de qualquer substituição."
        aside={
          <div className="relative hidden lg:block">
            <div className="absolute -left-6 top-6 h-px w-24 bg-electric/40" aria-hidden="true" />
            <MascotPlaceholder className="ml-auto w-52 opacity-90 [mask-image:linear-gradient(to_bottom,black_72%,transparent)]" />
          </div>
        }
      />

      {/* Navegação visual pelos seis serviços */}
      <section aria-label="Índice de serviços" className="border-b border-border bg-night-soft">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicosDetalhe.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-3 border-b border-border/60 py-2 text-sm text-muted-foreground transition-colors hover:text-electric-soft"
                >
                  <span className="label-tech text-steel">{s.numero}</span>
                  <span className="min-w-0 flex-1">{s.titulo}</span>
                  <ArrowRight
                    className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {servicosDetalhe.map((s, i) => {
        const claro = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-28 py-16 sm:py-24 ${
              claro ? "bg-warm text-warm-ink" : "bg-night"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div
                className={`grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 ${
                  claro ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className={`label-tech ${claro ? "text-electric" : "text-electric-soft"}`}>
                    {s.numero} // Serviço
                  </p>
                  <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.9rem)]">{s.titulo}</h2>
                  <p
                    className={`mt-5 max-w-lg ${claro ? "text-warm-ink/75" : "text-muted-foreground"}`}
                  >
                    {s.problema}
                  </p>
                  <CableLine className="mt-8 h-2 w-full max-w-sm" />
                  <p className={`mt-8 text-sm ${claro ? "text-warm-ink/70" : "text-steel"}`}>
                    <span className="label-tech">Quando pedir ajuda</span>
                    <br />
                    <span className="mt-2 block text-base">{s.quando}</span>
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="label-tech text-steel">Sinais comuns</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                      {s.sinais.map((x) => (
                        <li
                          key={x}
                          className={`border-l-2 pl-3 ${
                            claro ? "border-warm-ink/25 text-warm-ink/80" : "border-electric/40 text-muted-foreground"
                          }`}
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="label-tech text-steel">Pode incluir</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                      {s.incluido.map((x) => (
                        <li key={x} className="flex gap-2">
                          <Check
                            className={`mt-0.5 size-4 shrink-0 ${claro ? "text-electric" : "text-electric-soft"}`}
                            aria-hidden="true"
                          />
                          <span className={claro ? "text-warm-ink/80" : "text-muted-foreground"}>
                            {x}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p
                    className={`sm:col-span-2 text-sm ${claro ? "text-warm-ink/60" : "text-steel"}`}
                  >
                    {s.resumo}
                  </p>
                  <Link
                    to="/contactos"
                    className={`sm:col-span-2 inline-flex min-h-11 w-fit items-center gap-2 rounded-sm border px-5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      claro
                        ? "border-warm-ink/30 text-warm-ink hover:bg-warm-ink hover:text-warm"
                        : "border-steel/50 hover:border-electric hover:text-electric-soft"
                    }`}
                  >
                    Pedir ajuda para isto
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <InnerCta
        titulo="Não sabes qual é o serviço certo? Diz-me o que se passa."
        texto="Descreve o problema por palavras tuas. A partir daí digo-te se é caso para apoio remoto ou deslocação."
        accao="Falar comigo"
        to="/contactos"
      />
    </PageShell>
  );
}
