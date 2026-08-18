import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, InnerCta } from "@/components/rui/PageShell";
import { MascotPlaceholder } from "@/components/rui/Brand";
import { CableLine } from "@/components/rui/Cable";
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

function SobrePage() {
  return (
    <PageShell>
      <PageHero
        pagina="Sobre o Rui"
        etiqueta="// Sobre"
        titulo={
          <>
            Tecnologia explicada
            <br />
            como deve ser.
          </>
        }
        intro="Trabalho em informática desde 2006. Hoje ajudo particulares e pequenos negócios de Cascais a resolver problemas sem os transformar num assunto complicado."
        aside={
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-6 top-10 border border-electric/25"
            />
            <MascotPlaceholder className="relative w-full drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]" />
          </div>
        }
      />

      <section className="bg-night py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="label-tech text-electric-soft">// Percurso</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.6rem)]">Desde 2006</h2>
            <ol className="mt-8 border-l border-electric/30">
              {sobreTimeline.map((t) => (
                <li key={t.ano} className="relative pb-8 pl-6 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-electric-soft"
                  />
                  <p className="label-tech text-steel">{t.ano}</p>
                  <p className="mt-2 text-muted-foreground">{t.texto}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="self-center">
            <CableLine className="h-2 w-full" />
            <p className="mt-8 text-lg text-muted-foreground">
              Ao longo destes anos trabalhei com utilizadores e com equipamento de todos os feitios:
              computadores, sistemas, redes e infraestruturas. Foi aí que percebi que a parte mais
              importante não é a técnica — é conseguir explicar.
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
        </div>
      </section>

      <section className="bg-warm py-16 text-warm-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="label-tech text-electric">// Forma de trabalhar</p>
          <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.75rem)]">
            Quatro regras que não mudo
          </h2>
          <ul className="mt-10 grid gap-px bg-warm-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {sobreValores.map((v) => (
              <li key={v.numero} className="bg-warm p-6">
                <p className="label-tech text-warm-ink/50">{v.numero}</p>
                <h3 className="mt-3 display-xl text-lg">{v.titulo}</h3>
                <p className="mt-3 text-sm text-warm-ink/75">{v.texto}</p>
              </li>
            ))}
          </ul>
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
