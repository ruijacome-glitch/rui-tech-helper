import logoAsset from "@/assets/logo-rui.svg.asset.json";
import mascoteAsset from "@/assets/mascote-rui.png.asset.json";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Logótipo O Rui dos Computadores"
      width={40}
      height={40}
      className={`size-10 shrink-0 rounded-full ${className}`}
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`leading-none ${className}`}>
      <span className="block display-xl text-base tracking-tight text-foreground">O Rui dos</span>
      <span className="block display-xl text-base tracking-tight text-electric-soft">Computadores</span>
    </span>
  );
}

export function MascotPlaceholder({ className = "" }: { className?: string }) {
  return (
    <img
      src={mascoteAsset.url}
      alt="Rui, técnico de informática em Cascais, a trabalhar num portátil"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
