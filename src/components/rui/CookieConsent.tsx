import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import {
  EVENTO_GERIR_COOKIES,
  PREFERENCIAS_POR_DEFEITO,
  guardarConsentimento,
  lerConsentimento,
  type Preferencias,
} from "@/lib/cookie-consent";
import { carregarGoogleAnalytics } from "@/lib/analytics";
import { carregarMetaPixel } from "@/lib/meta-pixel";

type Categoria = {
  id: "necessarios" | "analise" | "marketing";
  titulo: string;
  texto: string;
  bloqueado?: boolean;
};

const categorias: Categoria[] = [
  {
    id: "necessarios",
    titulo: "Necessários",
    texto:
      "Armazenamento local usado apenas para guardar a tua escolha de consentimento. Sempre activos.",
    bloqueado: true,
  },
  {
    id: "analise",
    titulo: "Análise",
    texto:
      "Estatísticas de utilização através do Google Analytics. Só carregado se autorizares esta categoria.",
  },
  {
    id: "marketing",
    titulo: "Marketing",
    texto:
      "Publicidade e acompanhamento de campanhas através do Meta Pixel (Facebook/Instagram). Só carregado se autorizares esta categoria.",
  },
];

export function CookieConsent() {
  const [painelVisivel, setPainelVisivel] = useState(false);
  const [dialogoAberto, setDialogoAberto] = useState(false);
  const [prefs, setPrefs] = useState<Preferencias>(PREFERENCIAS_POR_DEFEITO);

  const dialogoRef = useRef<HTMLDivElement | null>(null);
  const focoAnterior = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const registo = lerConsentimento();
    if (registo) {
      setPrefs({ necessarios: true, analise: registo.analise, marketing: registo.marketing });
      if (registo.analise) carregarGoogleAnalytics();
      if (registo.marketing) carregarMetaPixel();
    } else {
      setPainelVisivel(true);
    }
  }, []);

  const abrirDialogo = useCallback(() => {
    const registo = lerConsentimento();
    if (registo) {
      setPrefs({ necessarios: true, analise: registo.analise, marketing: registo.marketing });
    }
    focoAnterior.current = (document.activeElement as HTMLElement) ?? null;
    setDialogoAberto(true);
  }, []);

  useEffect(() => {
    const handler = () => abrirDialogo();
    window.addEventListener(EVENTO_GERIR_COOKIES, handler);
    return () => window.removeEventListener(EVENTO_GERIR_COOKIES, handler);
  }, [abrirDialogo]);

  const fecharDialogo = useCallback(() => {
    setDialogoAberto(false);
    focoAnterior.current?.focus?.();
  }, []);

  // Foco preso dentro do diálogo + Escape para fechar.
  useEffect(() => {
    if (!dialogoAberto) return;
    const no = dialogoRef.current;
    const focaveis = () =>
      Array.from(
        no?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((el) => !el.hasAttribute("disabled"));

    focaveis()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        fecharDialogo();
        return;
      }
      if (e.key !== "Tab") return;
      const lista = focaveis();
      if (lista.length === 0) return;
      const primeiro = lista[0]!;
      const ultimo = lista[lista.length - 1]!;
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dialogoAberto, fecharDialogo]);

  function decidir(valores: Preferencias) {
    guardarConsentimento(valores);
    setPrefs(valores);
    setPainelVisivel(false);
    setDialogoAberto(false);
    focoAnterior.current?.focus?.();
    if (valores.analise) carregarGoogleAnalytics();
    if (valores.marketing) carregarMetaPixel();
  }

  return (
    <>
      {painelVisivel && (
        <div
          role="region"
          aria-label="Consentimento de cookies"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-electric/30 bg-night/97 backdrop-blur-md motion-safe:animate-rise"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="display-xl text-base sm:text-lg">Tu decides o que fica ligado.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Usamos apenas armazenamento necessário para guardar a tua escolha. Tecnologias
                opcionais só serão activadas com a tua autorização.{" "}
                <Link to="/cookies" className="text-electric-soft underline underline-offset-4">
                  Política de cookies
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => decidir({ necessarios: true, analise: false, marketing: false })}
                className="min-h-11 flex-1 rounded-sm border border-steel/50 px-4 text-sm font-semibold text-foreground transition-colors hover:border-electric-soft sm:flex-none"
              >
                Recusar opcionais
              </button>
              <button
                type="button"
                onClick={abrirDialogo}
                className="min-h-11 flex-1 rounded-sm border border-steel/50 px-4 text-sm font-semibold text-foreground transition-colors hover:border-electric-soft sm:flex-none"
              >
                Configurar
              </button>
              <button
                type="button"
                onClick={() => decidir({ necessarios: true, analise: true, marketing: true })}
                className="min-h-11 flex-1 rounded-sm border border-electric-soft bg-electric-soft px-4 text-sm font-semibold text-night focus-tech transition-colors hover:bg-electric/85 sm:flex-none"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      )}

      {dialogoAberto && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-night/80 p-0 sm:items-center sm:p-4">
          <div
            ref={dialogoRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookies-dialogo-titulo"
            aria-describedby="cookies-dialogo-texto"
            className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto border border-electric/25 bg-navy-mid p-5 sm:rounded-sm sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="label-tech text-electric-soft">// Preferências</p>
                <h2 id="cookies-dialogo-titulo" className="mt-2 display-xl text-xl sm:text-2xl">
                  Configurar cookies
                </h2>
              </div>
              <button
                type="button"
                onClick={fecharDialogo}
                aria-label="Fechar configuração de cookies"
                className="grid size-10 shrink-0 place-items-center rounded-sm border border-steel/40 text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            <p id="cookies-dialogo-texto" className="mt-4 text-sm text-muted-foreground">
              As categorias opcionais estão desligadas por defeito. Podes alterar ou retirar a tua
              escolha a qualquer momento em “Gerir cookies”, no rodapé.
            </p>

            <ul className="mt-6 space-y-3">
              {categorias.map((c) => {
                const activo = c.bloqueado ? true : prefs[c.id];
                return (
                  <li
                    key={c.id}
                    className="flex items-start justify-between gap-4 border border-electric/15 bg-night p-4"
                  >
                    <div className="min-w-0">
                      <h3 className="display-xl text-base">{c.titulo}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.texto}</p>
                    </div>
                    <label className="flex shrink-0 items-center gap-2 text-xs">
                      <input
                        type="checkbox"
                        checked={activo}
                        disabled={c.bloqueado}
                        onChange={(e) =>
                          setPrefs((p) => ({ ...p, [c.id]: e.target.checked }) as Preferencias)
                        }
                        className="size-5 accent-[var(--color-electric)] disabled:opacity-60"
                      />
                      <span className="label-tech text-steel">
                        {c.bloqueado ? "Sempre" : activo ? "Ligado" : "Desligado"}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => decidir({ necessarios: true, analise: false, marketing: false })}
                className="min-h-11 flex-1 rounded-sm border border-steel/50 px-4 text-sm font-semibold text-foreground transition-colors hover:border-electric-soft"
              >
                Recusar opcionais
              </button>
              <button
                type="button"
                onClick={() => decidir({ ...prefs, necessarios: true })}
                className="min-h-11 flex-1 rounded-sm border border-steel/50 px-4 text-sm font-semibold text-foreground transition-colors hover:border-electric-soft"
              >
                Guardar escolha
              </button>
              <button
                type="button"
                onClick={() => decidir({ necessarios: true, analise: true, marketing: true })}
                className="min-h-11 flex-1 rounded-sm border border-electric-soft bg-electric-soft px-4 text-sm font-semibold text-night focus-tech transition-colors hover:bg-electric/85"
              >
                Aceitar todos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
