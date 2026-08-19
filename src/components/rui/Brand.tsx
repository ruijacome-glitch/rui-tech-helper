import logoAsset from "@/assets/logo-rui.svg";
import mascoteAsset from "@/assets/mascote-rui.png";
import mascoteSobreAsset from "@/assets/mascote-sobre-o-rui.png";
import mascotePrecarioAsset from "@/assets/mascote-precario.png";
import { cn } from "@/lib/utils";

/** Mascote oficial da página "Preçário" (PNG com transparência real). */
export function MascotPrecario({ className = "" }: { className?: string }) {
  return (
    <img
      src={mascotePrecarioAsset}
      alt="Rui, técnico de informática em Cascais, a calcular o valor de uma reparação na bancada"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

/** Mascote oficial da página "Sobre o Rui" (PNG com transparência real). */
export function MascotBancada({ className = "" }: { className?: string }) {
  return (
    <img
      src={mascoteSobreAsset}
      alt="Rui, técnico de informática em Cascais, a diagnosticar um computador na bancada"
      className={className}
      loading="eager"
      decoding="async"
    />
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
    <img
      src={mascoteAsset}
      alt="Rui, técnico de informática em Cascais, a trabalhar num portátil"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
