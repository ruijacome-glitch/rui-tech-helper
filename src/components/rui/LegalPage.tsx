import type { ReactNode } from "react";
import { PageShell, Breadcrumbs } from "./PageShell";
import { legal } from "@/data/legal";

export type SeccaoLegal = {
  id: string;
  titulo: string;
  conteudo: ReactNode;
};

/** Marcador discreto para campos legais ainda por preencher. */
export function CampoPendente({ texto, pendente }: { texto: string; pendente: boolean }) {
  return pendente ? (
    <span className="label-tech text-steel/80">{texto}</span>
  ) : (
    <span className="text-foreground">{texto}</span>
  );
}

export function LinhaLegal({ rotulo, campo }: { rotulo: string; campo: { texto: string; pendente: boolean } }) {
  return (
    <div className="grid gap-1 border-b border-electric/12 py-3 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-6">
      <dt className="label-tech text-steel">{rotulo}</dt>
      <dd className="text-sm">
        <CampoPendente texto={campo.texto} pendente={campo.pendente} />
      </dd>
    </div>
  );
}

/**
 * Layout partilhado das páginas legais: navy coerente, leitura confortável,
 * breadcrumbs e índice interno.
 */
export function LegalPage({
  etiqueta,
  titulo,
  intro,
  pagina,
  seccoes,
}: {
  etiqueta: string;
  titulo: ReactNode;
  intro: string;
  pagina: string;
  seccoes: SeccaoLegal[];
}) {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-night py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_70%_at_85%_0%,var(--color-navy-line),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs pagina={pagina} />
          <p className="mt-8 label-tech text-electric-soft">{etiqueta}</p>
          <h1 className="mt-4 display-xl text-[clamp(1.9rem,5.5vw,3.4rem)]">{titulo}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">{intro}</p>
          <p className="mt-6 label-tech text-steel">
            Última actualização: {legal.dataActualizacao}
          </p>
        </div>
      </section>

      <div className="bg-navy-mid py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-14">
          <nav aria-label="Índice da página" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="label-tech text-steel">Índice</h2>
            <ol className="mt-4 space-y-2 text-sm">
              {seccoes.map((s, i) => (
                <li key={s.id} className="flex gap-3">
                  <span className="label-tech text-electric/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground transition-colors hover:text-electric-soft"
                  >
                    {s.titulo}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 space-y-12">
            {seccoes.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <p className="label-tech text-electric/70">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 display-xl text-[clamp(1.25rem,3vw,1.75rem)]">{s.titulo}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground [&_a]:text-electric-soft [&_a]:underline [&_a]:underline-offset-4 [&_li]:leading-relaxed [&_strong]:text-foreground">
                  {s.conteudo}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
