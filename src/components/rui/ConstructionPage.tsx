import construcaoAsset from "@/assets/pagina-em-construcao.png.asset.json";
import { Cable } from "@/components/rui/Cable";
import { contacto } from "@/data/site";

/**
 * Página de "em construção" — visual navy coerente com o resto do site.
 * Usa a ilustração oficial aprovada em grande, cabo de diagnóstico animado e
 * etiquetas técnicas flutuantes.
 */
export function ConstructionPage() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-night px-4 py-16 text-center">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-orange focus:px-4 focus:py-2 focus:text-night"
      >
        Saltar para o conteúdo
      </a>

      {/* Gradiente de profundidade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,_#122646_0%,_#030B1A_55%)]" />

      {/* Cabo de diagnóstico de fundo */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Cable
          path="M 8 0 C 8 60, 92 80, 92 160 C 92 240, 8 260, 8 340 C 8 420, 92 440, 92 520 C 92 600, 50 620, 50 700"
          height={700}
          className="h-full w-full"
        />
      </div>

      {/* Etiquetas técnicas flutuantes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="label-tech absolute left-[8%] top-[18%] text-electric-soft/60 animate-float">
          A MONTAR
        </span>
        <span
          className="label-tech absolute right-[10%] top-[28%] text-orange/70 animate-float"
          style={{ animationDelay: "1s" }}
        >
          EM TESTES
        </span>
        <span
          className="label-tech absolute bottom-[22%] left-[12%] text-electric-soft/60 animate-float"
          style={{ animationDelay: "2s" }}
        >
          JÁ JÁ
        </span>
      </div>

      {/* Conteúdo principal */}
      <main id="conteudo" className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        <div className="relative w-full max-w-3xl animate-float">
          <img
            src={construcaoAsset.url}
            alt="O Rui dos Computadores — Página em construção"
            className="h-auto w-full"
            loading="eager"
            decoding="async"
          />
          <span className="absolute right-[8%] top-[8%] flex h-4 w-4 lg:h-5 lg:w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-orange lg:h-5 lg:w-5" />
          </span>
        </div>

        <p className="label-tech mt-8 text-electric-soft">// Em construção</p>

        <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
          Estamos a montar o novo site. Voltamos brevemente com a assistência informática em Cascais, ao domicílio e remota.
        </p>

        <div className="mt-10 flex flex-col items-center gap-1 text-sm text-steel">
          <p className="font-medium text-foreground">{contacto.marca}</p>
          <p>{contacto.area}</p>
          {contacto.email ? <p>{contacto.email}</p> : null}
          {contacto.telefone ? <p>{contacto.telefone}</p> : null}
        </div>
      </main>

      {/* Rodapé mínimo */}
      <footer className="relative z-10 mt-12 pb-6 text-xs text-steel/70">
        © {new Date().getFullYear()} {contacto.marca}. Todos os direitos reservados.
      </footer>
    </div>
  );
}
