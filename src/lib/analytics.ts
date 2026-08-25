/**
 * Google Analytics (GA4) — carregado apenas depois de consentimento explícito
 * na categoria "análise". Ver src/components/rui/CookieConsent.tsx.
 */

export const GA_MEASUREMENT_ID = "G-LCXB2L7EV3";

declare global {
  interface Window {
    dataLayer?: unknown[];
    __gaCarregado?: boolean;
  }
}

export function carregarGoogleAnalytics() {
  if (typeof window === "undefined" || window.__gaCarregado) return;
  window.__gaCarregado = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
