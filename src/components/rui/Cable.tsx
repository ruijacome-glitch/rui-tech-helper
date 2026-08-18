/**
 * Cabo de diagnóstico — fio condutor visual do site.
 * Desenhado em SVG, com pulso de luz que percorre o traçado.
 */
export function Cable({
  className = "",
  path = "M 60 0 C 60 90, 8 130, 8 220 C 8 320, 92 340, 92 430 C 92 520, 30 540, 30 640",
  height = 640,
}: {
  className?: string;
  path?: string;
  height?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
      className={className}
    >
      <path d={path} fill="none" stroke="var(--color-electric)" strokeOpacity="0.22" strokeWidth="2" />
      <path
        d={path}
        fill="none"
        stroke="var(--color-electric-soft)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="18 220"
        className="animate-cable"
      />
    </svg>
  );
}

/** Linha horizontal com pulso, para ligar passos e secções. */
export function CableLine({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 600 8" preserveAspectRatio="none" className={className}>
      <line x1="0" y1="4" x2="600" y2="4" stroke="var(--color-electric)" strokeOpacity="0.25" strokeWidth="2" />
      <line
        x1="0"
        y1="4"
        x2="600"
        y2="4"
        stroke="var(--color-electric-soft)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="24 240"
        className="animate-cable"
      />
    </svg>
  );
}
