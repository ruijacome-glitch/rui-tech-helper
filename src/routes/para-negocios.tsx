import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, InnerCta, HeroMascot } from "@/components/rui/PageShell";
import { negociosAreas, negociosQuando, negociosModelo } from "@/data/paginas";
import negociosCenarioAsset from "@/assets/negocios-cenario.png.asset.json";

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

/** Ilustração do cenário de um pequeno negócio com postos, rede e equipamentos. */
function CenarioNegocio() {
  return (
    <div
      className="w-full"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <img
        src={negociosCenarioAsset.url}
        alt="Técnico de informática ao telefone num escritório com computadores, servidor, router e caixas de instalação, configuração e suporte."
        className="block h-auto w-full object-contain"
        loading="lazy"
        decoding="async"
      />
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
        aside={
          <HeroMascot
            src={negociosCenarioAsset.url}
            alt="Técnico de informática ao telefone num escritório com computadores, servidor, router e caixas de instalação, configuração e suporte."
          />
        }
      />

      <section className="bg-night py-16 text-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="label-tech text-electric-soft">// Áreas</p>
          <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.75rem)]">
            No que posso ajudar
          </h2>
          <ul className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {negociosAreas.map((a) => (
              <li
                key={a.numero}
                className="flex gap-5 border-b border-border py-6 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="label-tech shrink-0 pt-1 text-steel">{a.numero}</span>
                <div>
                  <h3 className="display-xl text-lg">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.texto}</p>
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
