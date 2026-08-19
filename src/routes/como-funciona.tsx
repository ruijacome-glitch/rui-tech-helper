import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageShell, PageHero, InnerCta } from "@/components/rui/PageShell";
import { Cable } from "@/components/rui/Cable";
import {
  passosDetalhe,
  primeiraMensagem,
  remotoOuDomicilio,
  antesDaIntervencao,
} from "@/data/paginas";

const titulo = "Como Funciona a Assistência | O Rui dos Computadores";
const descricao =
  "Da primeira mensagem à solução: avaliação, diagnóstico, confirmação do valor e resolução testada contigo. Assistência informática em Cascais.";

export const Route = createFileRoute("/como-funciona")({
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
  component: ComoFuncionaPage,
});

function ComoFuncionaPage() {
  return (
    <PageShell>
      <PageHero
        pagina="Como funciona"
        etiqueta="// Percurso"
        titulo={
          <>
            Da primeira mensagem
            <br />à solução.
          </>
        }
        intro="Cinco passos simples, sempre pela mesma ordem. Sabes em que ponto estás e o que vem a seguir."
      />

      {/* Percurso — timeline vertical em mobile, composição alternada em desktop */}
      <section className="relative overflow-hidden bg-night py-16 sm:py-24">
        <Cable
          className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-24 -translate-x-1/2 lg:block"
          height={640}
        />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ol className="space-y-12 lg:space-y-20">
            {passosDetalhe.map((p, i) => (
              <li
                key={p.numero}
                className={`relative border-l border-electric/30 pl-6 lg:border-l-0 lg:pl-0 lg:w-[46%] ${
                  i % 2 === 1 ? "lg:ml-auto lg:text-left" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-electric-soft lg:hidden"
                />
                <p className="label-tech text-electric-soft">{p.numero}</p>
                <h2 className="mt-3 display-xl text-[clamp(1.5rem,4vw,2.5rem)]">{p.titulo}</h2>
                <p className="mt-3 text-muted-foreground">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* O que deves dizer */}
      <section className="bg-night py-16 text-foreground sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="label-tech text-electric-soft">// Primeira mensagem</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.75rem)]">
              O que deves dizer na primeira mensagem
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Não precisas de saber o nome das coisas. Quatro informações chegam para eu perceber
              por onde começar.
            </p>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {primeiraMensagem.map((t, i) => (
              <li key={t} className="flex gap-5 py-5">
                <span className="label-tech shrink-0 text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Remoto ou domicílio */}
      <section className="bg-night py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="label-tech text-electric-soft">// Formato</p>
          <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.75rem)]">
            Assistência remota ou ao domicílio?
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {remotoOuDomicilio.map((r) => (
              <div key={r.titulo} className="bg-night p-6 sm:p-8">
                <h3 className="display-xl text-xl text-electric-soft">{r.titulo}</h3>
                <p className="mt-3 text-muted-foreground">{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Antes de qualquer intervenção + sem surpresas */}
      <section className="bg-night-soft py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="label-tech text-electric-soft">// Antes de mexer</p>
            <h2 className="mt-4 display-xl text-[clamp(1.5rem,4vw,2.4rem)]">
              O que acontece antes de qualquer intervenção
            </h2>
            <ul className="mt-8 space-y-4">
              {antesDaIntervencao.map((t) => (
                <li key={t} className="border-l-2 border-electric/40 pl-4 text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start border border-orange/40 bg-night p-6 sm:p-8">
            <ShieldCheck className="size-8 text-orange" aria-hidden="true" />
            <h2 className="mt-4 display-xl text-[clamp(1.5rem,4vw,2.4rem)]">Sem surpresas</h2>
            <p className="mt-4 text-muted-foreground">
              O valor da intervenção é confirmado contigo antes de avançar. Se durante o trabalho
              aparecer algo diferente do previsto, paro e falamos primeiro. Nunca há trabalho feito
              sem o teu acordo.
            </p>
          </div>
        </div>
      </section>

      <InnerCta
        titulo="Começar o diagnóstico"
        texto="Conta-me o que se passa e faço já uma primeira avaliação."
        accao="Começar o diagnóstico"
        to="/contactos"
      />
    </PageShell>
  );
}
