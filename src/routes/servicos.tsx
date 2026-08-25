import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { PageShell, PageHero, HeroMascot } from "@/components/rui/PageShell";
import { CableLine } from "@/components/rui/Cable";
import { servicosDetalhe } from "@/data/paginas";
import { whatsappHref } from "@/data/site";
import servicosHeroAsset from "@/assets/servicos-hero.png";
import servicosAvif400 from "@/assets/servicos-hero-400.avif";
import servicosAvif800 from "@/assets/servicos-hero-800.avif";
import servicosWebp400 from "@/assets/servicos-hero-400.webp";
import servicosWebp800 from "@/assets/servicos-hero-800.webp";
import apontarOruiAsset from "@/assets/apontar-orui.png";
import { buildPageHead } from "@/lib/seo";
import { schemaScriptsServicos, breadcrumbScript } from "@/lib/schema";

/** Liga cada serviço ao tipo de problema do formulário de contacto. */
const tipoPorServico: Record<string, string> = {
  reparacao: "Não arranca",
  optimizacao: "Computador lento",
  instalacao: "Instalação e configuração",
  dados: "Ficheiros perdidos",
  remoto: "Outro / não sei explicar",
  redes: "Internet ou Wi-Fi",
};

const titulo = "Serviços de Assistência Informática em Cascais | O Rui dos Computadores";
const descricao =
  "Reparação, limpeza e optimização, instalação, recuperação de dados, apoio remoto e redes Wi-Fi para particulares e pequenos negócios em Cascais.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    ...buildPageHead({ title: titulo, description: descricao, path: "/servicos/" }),
    scripts: [...schemaScriptsServicos, breadcrumbScript("Serviços", "/servicos/")],
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
          <HeroMascot
            src={servicosHeroAsset}
            alt="Rui apresenta os serviços de assistência informática em Cascais: reparação, redes, segurança e apoio remoto"
            avifSrcSet={`${servicosAvif400} 400w, ${servicosAvif800} 800w`}
            webpSrcSet={`${servicosWebp400} 400w, ${servicosWebp800} 800w`}
          />
        }
      />

      {/* Navegação visual pelos seis serviços */}
      <section aria-label="Índice de serviços" className="surface-band section-divider">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicosDetalhe.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="focus-tech group flex items-baseline gap-3 border-b border-border py-2 text-sm text-foreground transition-colors hover:text-electric-soft"
                >
                  <span className="label-tech text-muted-foreground">{s.numero}</span>
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
        const alterna = i % 2 === 1;
        return (
          <section
            key={s.id}
            id={s.id}
            className={`section-divider scroll-mt-28 py-16 sm:py-24 ${
              alterna ? "surface-alt" : "surface-base"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div
                className={`grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 ${
                  alterna ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="label-tech text-electric-soft">
                    {s.numero} // Serviço
                  </p>
                  <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.9rem)]">{s.titulo}</h2>
                  <p className="mt-5 max-w-lg text-muted-foreground">
                    {s.problema}
                  </p>
                  <p className="mt-4 max-w-lg text-sm text-muted-foreground">
                    {s.detalhe}
                  </p>
                  <CableLine className="mt-8 h-2 w-full max-w-sm" />
                  <div className="panel-tech mt-8 p-5">
                    <p className="label-tech text-electric-soft">Quando pedir ajuda</p>
                    <p className="mt-2 text-base text-muted-foreground">{s.quando}</p>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="label-tech text-electric-soft">Sinais comuns</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                      {s.sinais.map((x) => (
                        <li
                          key={x}
                          className="border-l-2 border-electric/40 pl-3 text-muted-foreground"
                        >
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="label-tech text-electric-soft">Pode incluir</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                      {s.incluido.map((x) => (
                        <li key={x} className="flex gap-2">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-electric-soft"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground">
                            {x}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="sm:col-span-2 text-sm text-muted-foreground">
                    {s.resumo}
                  </p>
                  <Link
                    to="/contactos"
                    search={{ problema: tipoPorServico[s.id] }}
                    className="focus-tech sm:col-span-2 inline-flex min-h-11 w-fit items-center gap-2 rounded-sm border border-steel px-5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-electric hover:text-electric-soft"
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

      {/* CTA final — Chamar o Rui */}
      <section className="relative overflow-hidden bg-electric pb-10 pt-10 text-primary-foreground sm:pt-14 lg:pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Desktop: imagem à esquerda, texto à direita — sem espaço até à margem inferior */}
          <div className="hidden items-end gap-10 lg:grid lg:grid-cols-[1fr_1.1fr]">
            <div className="flex justify-start self-end">
              <img
                src={apontarOruiAsset}
                alt="Rui a apontar para o botão de WhatsApp"
                className="block h-auto w-full max-w-[36rem] align-bottom object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="self-center text-left">
              <p className="label-tech text-primary-foreground/70">// Chamada para ação</p>
              <h2 className="mt-3 display-xl text-[clamp(2rem,6vw,3.5rem)]">
                Chamar o Rui.
              </h2>
              <p className="mt-4 max-w-md text-lg text-primary-foreground/85">
                Resposta rápida no WhatsApp. Ou preenche o formulário se preferires descrever o problema por escrito.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappHref}
                  className="focus-tech inline-flex min-h-12 items-center gap-2 rounded-sm border border-primary-foreground/70 bg-primary-foreground px-6 font-semibold uppercase tracking-wide text-electric transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90 active:translate-y-0 focus-visible:outline-night"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp
                </a>
                <Link
                  to="/contactos"
                  className="focus-tech inline-flex min-h-12 items-center rounded-sm bg-night px-6 font-semibold uppercase tracking-wide text-foreground transition-all hover:-translate-y-0.5 hover:bg-night/90 active:translate-y-0 focus-visible:outline-night"
                >
                  Preencher formulário
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile: imagem pequena ao lado do botão WhatsApp */}
          <div className="text-center lg:hidden">
            <p className="label-tech text-primary-foreground/70">// Chamada para ação</p>
            <h2 className="mt-3 display-xl text-[clamp(2rem,6vw,3.5rem)]">
              Chamar o Rui.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-primary-foreground/85">
              Resposta rápida no WhatsApp. Ou preenche o formulário se preferires descrever o problema por escrito.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-end justify-center gap-2">
                <img
                  src={apontarOruiAsset}
                  alt="Rui a apontar para o botão de WhatsApp"
                  className="h-auto w-32 object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)] sm:w-40"
                  loading="lazy"
                  decoding="async"
                />
                <a
                  href={whatsappHref}
                  className="focus-tech inline-flex min-h-12 items-center gap-2 rounded-sm border border-primary-foreground/70 bg-primary-foreground px-5 font-semibold uppercase tracking-wide text-electric transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90 active:translate-y-0 focus-visible:outline-night sm:px-6"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
              <Link
                to="/contactos"
                className="focus-tech inline-flex min-h-12 items-center rounded-sm bg-night px-6 font-semibold uppercase tracking-wide text-foreground transition-all hover:-translate-y-0.5 hover:bg-night/90 active:translate-y-0 focus-visible:outline-night"
              >
                Preencher formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
