import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

export function FinalCta() {
  return (
    <section className="bg-electric py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_auto]">
        <div>
          <h2 className="display-xl text-[clamp(2rem,6.5vw,4rem)]">
            O problema não se vai resolver sozinho.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/85">
            Resposta rápida. Solução próxima.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-primary-foreground/60 px-6 font-semibold uppercase tracking-wide transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="#contactos"
              className="inline-flex min-h-12 items-center rounded-sm bg-night px-6 font-semibold uppercase tracking-wide text-foreground"
            >
              Preencher formulário
            </a>
          </div>
        </div>

        <a
          href="#contactos"
          className="grid size-40 place-items-center justify-self-start rounded-full bg-orange text-center display-xl text-xl text-night transition-transform hover:scale-105 sm:size-48 lg:justify-self-end"
        >
          Chamar
          <br />o Rui
        </a>
      </div>
    </section>
  );
}
