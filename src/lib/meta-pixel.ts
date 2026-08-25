/**
 * Meta (Facebook) Pixel — carregado apenas depois de consentimento explícito
 * na categoria "marketing". Ver src/components/rui/CookieConsent.tsx.
 */

export const META_PIXEL_ID = "4941021316146141";

type Fbq = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    __metaPixelCarregado?: boolean;
  }
}

export function carregarMetaPixel() {
  if (typeof window === "undefined" || window.__metaPixelCarregado) return;
  window.__metaPixelCarregado = true;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue.push(args);
  } as Fbq;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}
