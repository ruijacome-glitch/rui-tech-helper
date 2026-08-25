import logoAsset from "@/assets/logo-rui.svg";
import mascoteAsset from "@/assets/mascote-rui.png";
import mascoteAvif400 from "@/assets/mascote-rui-400.avif";
import mascoteAvif800 from "@/assets/mascote-rui-800.avif";
import mascoteWebp400 from "@/assets/mascote-rui-400.webp";
import mascoteWebp800 from "@/assets/mascote-rui-800.webp";
import mascoteSobreAsset from "@/assets/mascote-sobre-o-rui.png";
import mascoteSobreAvif400 from "@/assets/mascote-sobre-o-rui-400.avif";
import mascoteSobreAvif800 from "@/assets/mascote-sobre-o-rui-800.avif";
import mascoteSobreWebp400 from "@/assets/mascote-sobre-o-rui-400.webp";
import mascoteSobreWebp800 from "@/assets/mascote-sobre-o-rui-800.webp";
import mascotePrecarioAsset from "@/assets/mascote-precario.png";
import { cn } from "@/lib/utils";

const HERO_SIZES = "(min-width: 1024px) 544px, (min-width: 640px) 416px, 352px";

/** Mascote oficial da página "Preçário" (PNG com transparência real). */
export function MascotPrecario({ className = "" }: { className?: string }) {
  return (
    <img
      src={mascotePrecarioAsset}
      alt="Rui, técnico de informática em Cascais, a calcular o valor de uma reparação na bancada"
      className={className}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  );
}

/** Mascote oficial da página "Sobre o Rui" (WebP/AVIF com fallback PNG). */
export function MascotBancada({ className = "" }: { className?: string }) {
  return (
    <picture>
      <source type="image/avif" srcSet={`${mascoteSobreAvif400} 400w, ${mascoteSobreAvif800} 800w`} sizes={HERO_SIZES} />
      <source type="image/webp" srcSet={`${mascoteSobreWebp400} 400w, ${mascoteSobreWebp800} 800w`} sizes={HERO_SIZES} />
      <img
        src={mascoteSobreAsset}
        alt="Rui, técnico de informática em Cascais, a diagnosticar um computador na bancada"
        className={className}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}


export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset}
      alt="Logótipo O Rui dos Computadores"
      width={40}
      height={40}
      className={cn("size-10 shrink-0 rounded-full", className)}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={cn("leading-none text-base", className)}>
      <span className="block display-xl tracking-tight text-foreground">O Rui dos</span>
      <span className="block display-xl tracking-tight text-electric-soft">Computadores</span>
    </span>
  );
}

export function MascotPlaceholder({ className = "" }: { className?: string }) {
  return (
    <picture>
      <source type="image/avif" srcSet={`${mascoteAvif400} 400w, ${mascoteAvif800} 800w`} sizes="320px" />
      <source type="image/webp" srcSet={`${mascoteWebp400} 400w, ${mascoteWebp800} 800w`} sizes="320px" />
      <img
        src={mascoteAsset}
        alt="Rui, técnico de informática em Cascais, a trabalhar num portátil"
        className={className}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}
