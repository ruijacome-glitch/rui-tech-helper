import { argumentos } from "@/data/site";
import { useConteudoSite } from "@/lib/conteudoSite";

export function WhyRui() {
  const { data } = useConteudoSite();
  const testemunho = data.testemunho;

  return (
    <section id="porque-o-rui" className="bg-night-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="label-tech text-electric-soft">03 // Porquê o Rui</p>
        <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)]">
          Confiança construída a resolver problemas.
        </h2>

        <dl className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {argumentos.map((a) => (
            <div key={a.titulo} className="bg-night p-6">
              <dt className="display-xl text-lg text-electric-soft">{a.titulo}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{a.texto}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <figure className="border-l-2 border-orange pl-6">
            <blockquote className="display-xl text-[clamp(1.5rem,4vw,2.5rem)] leading-tight">
              “{testemunho.citacao}”
            </blockquote>
            <figcaption className="label-tech mt-4 text-steel">
              {testemunho.atribuicao}
            </figcaption>
          </figure>

          <div
            aria-hidden="true"
            className="rounded-sm border border-border bg-night p-5 font-mono text-sm"
          >
            <p className="label-tech mb-4 flex items-center gap-2 text-steel">
              <span className="size-2 rounded-full bg-orange" />
              RUI_OS v3.1
            </p>
            <p className="text-steel">&gt; diagnostico --equipamento portatil</p>
            <p className="text-muted-foreground">&nbsp;&nbsp;a analisar sistema…</p>
            <p className="text-muted-foreground">&nbsp;&nbsp;causa identificada: disco saturado</p>
            <p className="mt-2 text-electric-soft">
              &gt; estado: <span className="text-orange">Resolvido</span>
              <span className="ml-1 inline-block h-4 w-2 animate-blink bg-orange align-middle" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
