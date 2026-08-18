import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappHref } from "@/data/site";
import { MascotPlaceholder } from "./Brand";
import { Cable } from "./Cable";

const etiquetas = [
  { texto: "A analisar", classe: "left-0 top-10", cor: "text-electric-soft border-electric/50" },
  { texto: "Problema detectado", classe: "right-0 top-1/3", cor: "text-orange border-orange/50" },
  { texto: "Solução encontrada", classe: "left-2 bottom-12", cor: "text-foreground border-steel/40" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-night pt-28 pb-16 sm:pt-36 lg:pb-24">
      <Cable className="pointer-events-none absolute -left-6 top-24 hidden h-[640px] w-24 opacity-70 lg:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-rise">
          <p className="label-tech text-electric-soft">00 // Cascais, Portugal</p>
          <h1 className="mt-5 display-xl text-[clamp(2rem,5.2vw,3.6rem)]">
            <span className="block">O teu computador</span>
            <span className="block">não precisa de um</span>
            <span className="block">call center.</span>
            <span className="block text-electric">Precisa do Rui.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Assistência informática em Cascais, sem complicações e sem conversa técnica.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#sintomas"
              className="inline-flex min-h-12 items-center gap-2 rounded-sm bg-electric px-6 font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Começar diagnóstico
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref}
              className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-steel/50 px-6 font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-electric hover:text-electric-soft"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square">
            <div className="absolute inset-4 rounded-full border border-electric/45" />
            <div className="absolute inset-4 rounded-full electric-glow" />
            <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute inset-4">
              <circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="var(--color-electric-soft)"
                strokeWidth="1"
                strokeDasharray="40 268"
                className="animate-cable"
              />
            </svg>
            <MascotPlaceholder className="absolute inset-6 size-auto object-contain drop-shadow-[0_18px_40px_rgba(8,119,255,0.35)] animate-float" />

            {etiquetas.map((e) => (
              <span
                key={e.texto}
                className={`absolute ${e.classe} ${e.cor} label-tech animate-rise rounded-sm border bg-night/90 px-3 py-1.5`}
              >
                <span className="mr-2 inline-block size-1.5 rounded-full bg-current animate-blink align-middle" />
                {e.texto}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
