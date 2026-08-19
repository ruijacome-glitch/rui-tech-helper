import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Botão discreto para copiar um valor (telefone ou email) para a área de transferência.
 * Mostra confirmação visual e anuncia o resultado a leitores de ecrã.
 */
export function CopyButton({
  valor,
  rotulo,
  className = "",
}: {
  valor: string;
  rotulo: string;
  className?: string;
}) {
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!copiado) return;
    const t = setTimeout(() => setCopiado(false), 2000);
    return () => clearTimeout(t);
  }, [copiado]);

  if (!valor) return null;

  async function copiar() {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(true);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      aria-label={copiado ? `${rotulo} copiado` : `Copiar ${rotulo.toLowerCase()}`}
      className={`focus-tech inline-flex items-center gap-1.5 rounded-sm border border-electric/30 px-2 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-steel transition-colors hover:border-electric hover:text-electric-soft active:bg-electric/10 ${className}`}
    >
      {copiado ? (
        <Check className="size-3.5 text-electric-soft" aria-hidden="true" />
      ) : (
        <Copy className="size-3.5" aria-hidden="true" />
      )}
      <span>{copiado ? "Copiado" : "Copiar"}</span>
      <span className="sr-only" role="status">
        {copiado ? `${rotulo} copiado para a área de transferência` : ""}
      </span>
    </button>
  );
}
