import datacaisLogo from "@/assets/datacais-logo.png.asset.json";
import { parceiro } from "@/data/site";

type PartnerBlockProps = {
  variant?: "inline" | "featured";
};

export function PartnerBlock({ variant = "inline" }: PartnerBlockProps) {
  const isFeatured = variant === "featured";

  const linkContent = (
    <>
      <span className="sr-only">
        {parceiro.nome} — {parceiro.papel} (abre num novo separador)
      </span>
      <img
        src={datacaisLogo.url}
        alt={`${parceiro.nome} — ${parceiro.papel}`}
        className={`object-contain ${isFeatured ? "h-16" : "h-10"}`}
        loading="lazy"
      />
    </>
  );

  if (isFeatured) {
    return (
      <section className="bg-navy-mid py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="border border-electric/20 bg-night p-8">
            <a
              href={parceiro.url}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-tech block"
              aria-label={`${parceiro.nome} — ${parceiro.papel}`}
            >
              {linkContent}
            </a>
          </div>
          <div>
            <p className="label-tech text-electric-soft">// Parceria</p>
            <h2 className="mt-4 display-xl text-[clamp(1.6rem,4.5vw,2.6rem)]">
              Em parceria com a {parceiro.nome}
            </h2>
            <p className="mt-5 text-muted-foreground">{parceiro.texto}</p>
            <a
              href={parceiro.url}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-tech mt-6 inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-wide text-electric-soft underline underline-offset-4 hover:text-foreground"
            >
              Conhecer a {parceiro.nome}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-border pt-6">
      <a
        href={parceiro.url}
        target="_blank"
        rel="noreferrer noopener"
        className="focus-tech"
        aria-label={`${parceiro.nome} — ${parceiro.papel}`}
      >
        {linkContent}
      </a>
      <p className="min-w-0 max-w-md text-sm text-muted-foreground">
        {parceiro.texto.split(parceiro.nome)[0]}
        <a
          href={parceiro.url}
          target="_blank"
          rel="noreferrer noopener"
          className="text-electric-soft underline underline-offset-4 hover:text-foreground"
        >
          {parceiro.nome}
        </a>
        {parceiro.texto.split(parceiro.nome)[1]}
      </p>
    </div>
  );
}
