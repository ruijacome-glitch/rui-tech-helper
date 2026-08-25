import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-night">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-orange focus:px-4 focus:py-2 focus:text-night"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function Breadcrumbs({ pagina }: { pagina: string }) {
  return (
    <nav aria-label="Trilho de navegação" className="label-tech">
      <ol className="flex items-center gap-2 text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-electric-soft">
            Início
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3" />
        </li>
        <li aria-current="page" className="text-foreground">
          {pagina}
        </li>
      </ol>
    </nav>
  );
}

/**
 * Hero reutilizável das páginas internas.
 * Permite variações reais: coluna lateral e alinhamento, sempre em navy.
 */
export function PageHero({
  etiqueta,
  titulo,
  intro,
  pagina,
  aside,
  className = "",
}: {
  etiqueta: string;
  titulo: ReactNode;
  intro?: ReactNode;
  pagina: string;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("relative section-divider surface-base py-14 sm:py-20", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Breadcrumbs pagina={pagina} />
        <div
          className={cn(
            "mt-8 grid gap-8",
            aside ? "lg:grid-cols-[1fr_minmax(0,1.05fr)] lg:items-start lg:gap-10" : "",
          )}
        >
          <div>
            <p className="label-tech text-electric-soft">
              {etiqueta}
            </p>
            <h1
              className="mt-4 display-xl text-[clamp(2.1rem,7vw,4.5rem)] text-foreground"
            >
              {titulo}
            </h1>
            {intro && (
              <p
                className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground"
              >
                {intro}
              </p>
            )}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}

/**
 * Mascote dos heros das páginas internas.
 * Garante posição e dimensão consistentes entre todas as páginas.
 */
const HERO_SIZES = "(min-width: 1024px) 544px, (min-width: 640px) 416px, 352px";

export function HeroMascot({
  src,
  alt,
  className = "",
  avifSrcSet,
  webpSrcSet,
}: {
  src: string;
  alt: string;
  className?: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
}) {
  const imgClassName = cn(
    "relative z-10 mx-auto block h-auto w-full max-w-[22rem] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:max-w-[26rem] lg:max-w-[34rem]",
    className,
  );
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-14 top-8 hidden border-l border-t border-electric/20 lg:block"
      />
      {avifSrcSet || webpSrcSet ? (
        <picture>
          {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={HERO_SIZES} />}
          {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={HERO_SIZES} />}
          <img
            src={src}
            alt={alt}
            className={imgClassName}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      )}
    </div>
  );
}


/** CTA transversal das páginas internas — mais contido que o CTA da homepage. */
export function InnerCta({
  titulo,
  texto,
  accao,
  to,
  search,
}: {
  titulo: string;
  texto: string;
  accao: string;
  to: "/contactos" | "/servicos" | "/precario" | "/como-funciona";
  search?: { problema?: string };
}) {
  return (
    <section className="surface-band border-y border-border py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="label-tech text-electric-soft">// Próximo passo</p>
          <h2 className="mt-3 display-xl text-[clamp(1.5rem,4vw,2.5rem)]">{titulo}</h2>
          <p className="mt-3 text-muted-foreground">{texto}</p>
        </div>
        <Link
          to={to}
          search={search as never}
          className="focus-tech inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-orange px-6 text-sm font-semibold uppercase tracking-wide text-night transition-transform hover:-translate-y-0.5"
        >
          {accao}
        </Link>
      </div>
    </section>
  );
}
