/**
 * ESPAÇOS DE MARCA — substituir pelos ficheiros finais quando chegarem.
 *
 * LogoMark: logótipo circular (substituir por <img src={logo} .../>).
 * MascotFrame: cena da mascote do Rui a reparar um portátil.
 * Ambos usam apenas uma representação gráfica temporária.
 */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      data-brand-slot="logo"
      aria-hidden="true"
      className={`grid size-10 shrink-0 place-items-center rounded-full border border-electric/60 bg-night-soft ${className}`}
    >
      <svg viewBox="0 0 40 40" className="size-6">
        <circle cx="20" cy="20" r="18" fill="none" stroke="var(--color-electric)" strokeWidth="1.5" />
        <path d="M12 25 L20 11 L28 25" fill="none" stroke="var(--color-orange)" strokeWidth="2.4" strokeLinejoin="round" />
        <line x1="15" y1="29" x2="25" y2="29" stroke="var(--color-electric-soft)" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </span>
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

/**
 * Placeholder da mascote — ilustração vectorial temporária (traço simples)
 * de um técnico barbudo a reparar um portátil.
 * SUBSTITUIR por: <img src="/rui-mascote.png" alt="Rui, técnico de informática" />
 */
export function MascotPlaceholder({ className = "" }: { className?: string }) {
  return (
    <svg
      data-brand-slot="mascote"
      role="img"
      aria-label="Ilustração temporária do Rui, técnico de informática, a reparar um portátil"
      viewBox="0 0 320 320"
      className={className}
    >
      {/* cabeça */}
      <circle cx="160" cy="98" r="34" fill="none" stroke="var(--color-steel)" strokeWidth="2" />
      {/* cabelo escuro */}
      <path
        d="M126 92 q6 -34 34 -34 q28 0 34 34 q-10 -14 -34 -14 q-24 0 -34 14 z"
        fill="color-mix(in oklab, var(--color-night) 70%, var(--color-steel))"
        stroke="var(--color-steel)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* olhos */}
      <circle cx="149" cy="98" r="2.4" fill="var(--color-steel)" />
      <circle cx="171" cy="98" r="2.4" fill="var(--color-steel)" />
      {/* barba */}
      <path
        d="M130 100 q4 40 30 40 q26 0 30 -40 q-10 18 -30 18 q-20 0 -30 -18 z"
        fill="color-mix(in oklab, var(--color-night) 55%, var(--color-steel))"
        stroke="var(--color-steel)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* polo azul escuro */}
      <path
        d="M104 224 q0 -58 56 -74 q56 16 56 74 z"
        fill="color-mix(in oklab, var(--color-electric) 20%, transparent)"
        stroke="var(--color-electric)"
        strokeWidth="2"
      />
      <path d="M150 152 l10 12 l10 -12" fill="none" stroke="var(--color-electric-soft)" strokeWidth="2" />
      {/* portátil */}
      <rect x="118" y="186" width="84" height="46" rx="3" fill="var(--color-night)" stroke="var(--color-orange)" strokeWidth="2" />
      <line x1="132" y1="200" x2="178" y2="200" stroke="var(--color-orange)" strokeWidth="2" strokeOpacity="0.75" />
      <line x1="132" y1="212" x2="162" y2="212" stroke="var(--color-orange)" strokeWidth="2" strokeOpacity="0.5" />
      <path d="M96 232 h128 l18 30 h-164 z" fill="none" stroke="var(--color-electric-soft)" strokeWidth="2" strokeLinejoin="round" />
      {/* chave de fendas */}
      <line x1="228" y1="212" x2="252" y2="188" stroke="var(--color-steel)" strokeWidth="3" strokeLinecap="round" />
      <line x1="222" y1="218" x2="232" y2="208" stroke="var(--color-orange)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

