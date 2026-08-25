/**
 * Consentimento de cookies — armazenamento e estado partilhado.
 *
 * Guarda a escolha do utilizador em localStorage, na chave
 * `rui_cookie_preferences_v1`, com validade de seis meses.
 * O Google Analytics (categoria "análise") só é carregado se autorizado —
 * ver carregarGoogleAnalytics() em src/lib/analytics.ts.
 */

export const COOKIE_STORAGE_KEY = "rui_cookie_preferences_v1";

/** Seis meses em milissegundos (base: 30 dias por mês). */
export const VALIDADE_MS = 6 * 30 * 24 * 60 * 60 * 1000;

export type Preferencias = {
  /** Sempre activo e bloqueado. */
  necessarios: true;
  analise: boolean;
  marketing: boolean;
};

export type RegistoConsentimento = Preferencias & {
  /** Timestamp (ms) da decisão, usado para expirar ao fim de seis meses. */
  decididoEm: number;
  versao: 1;
};

export const PREFERENCIAS_POR_DEFEITO: Preferencias = {
  necessarios: true,
  analise: false,
  marketing: false,
};

export function lerConsentimento(): RegistoConsentimento | null {
  if (typeof window === "undefined") return null;
  try {
    const bruto = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!bruto) return null;
    const dados = JSON.parse(bruto) as Partial<RegistoConsentimento>;
    if (typeof dados?.decididoEm !== "number") return null;
    if (Date.now() - dados.decididoEm > VALIDADE_MS) {
      window.localStorage.removeItem(COOKIE_STORAGE_KEY);
      return null;
    }
    return {
      necessarios: true,
      analise: Boolean(dados.analise),
      marketing: Boolean(dados.marketing),
      decididoEm: dados.decididoEm,
      versao: 1,
    };
  } catch {
    return null;
  }
}

export function guardarConsentimento(prefs: Preferencias): RegistoConsentimento {
  const registo: RegistoConsentimento = {
    ...prefs,
    necessarios: true,
    decididoEm: Date.now(),
    versao: 1,
  };
  try {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(registo));
  } catch {
    /* armazenamento indisponível — a escolha vale apenas nesta sessão */
  }
  return registo;
}

/** Evento global para reabrir o diálogo a partir do rodapé. */
export const EVENTO_GERIR_COOKIES = "rui:gerir-cookies";

export function abrirGestorCookies() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(EVENTO_GERIR_COOKIES));
}
