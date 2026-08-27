import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const COMPLETAR_API_URL = (token: string) =>
  `https://api.oruidoscomputadores.pt/api/convites/${token}/completar`;

type CampoId = "email" | "morada" | "nif" | "password";
type Erros = Partial<Record<CampoId, string>>;

const campo =
  "focus-tech mt-2 w-full rounded-sm border border-input bg-night px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground hover:border-steel";
const campoErro = "border-orange";

function MensagemErro({ id, texto }: { id: string; texto: string }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-orange">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>{texto}</span>
    </p>
  );
}

export function AtivarContaForm({ token }: { token: string }) {
  const [ativado, setAtivado] = useState(false);
  const [aEnviar, setAEnviar] = useState(false);
  const [erroApi, setErroApi] = useState<string | null>(null);
  const [erros, setErros] = useState<Erros>({});
  const resumoRef = useRef<HTMLDivElement>(null);
  const [v, setV] = useState({ email: "", morada: "", nif: "", password: "" });

  function validar(): Erros {
    const e: Erros = {};
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.email.trim())) {
      e.email = "Indica um email válido.";
    }
    if (v.nif.trim() && !/^\d{9}$/.test(v.nif.trim())) {
      e.nif = "O NIF deve ter 9 dígitos.";
    }
    if (v.password.length < 10) {
      e.password = "A password deve ter no mínimo 10 caracteres.";
    }
    return e;
  }

  async function submeter(ev: FormEvent) {
    ev.preventDefault();
    const e = validar();
    setErros(e);
    setErroApi(null);

    if (Object.keys(e).length > 0) {
      requestAnimationFrame(() => {
        resumoRef.current?.focus();
        resumoRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      });
      return;
    }

    setAEnviar(true);
    try {
      const res = await fetch(COMPLETAR_API_URL(token), {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: v.email.trim(),
          morada: v.morada.trim() || null,
          nif: v.nif.trim() || null,
          password: v.password,
        }),
      });

      if (res.status === 404) {
        setErroApi("Convite não encontrado. Confirma o link recebido por email.");
      } else if (res.status === 410) {
        setErroApi("Este convite expirou ou já foi utilizado. Pede um novo ao Rui.");
      } else if (!res.ok) {
        setErroApi("Não foi possível ativar a conta. Tenta outra vez.");
      } else {
        setAtivado(true);
      }
    } catch {
      setErroApi("Não foi possível ligar ao servidor. Verifica a ligação e tenta outra vez.");
    } finally {
      setAEnviar(false);
      if (erroApi) {
        requestAnimationFrame(() => {
          resumoRef.current?.focus();
          resumoRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
        });
      }
    }
  }

  if (ativado) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-sm border border-electric/40 bg-night-soft p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-electric-soft" aria-hidden="true" />
        <h2 className="mt-4 display-xl text-2xl">Conta ativada</h2>
        <p className="mt-3 text-muted-foreground">
          A tua conta está pronta. O Rui entra em contacto assim que houver novidades sobre a tua
          intervenção.
        </p>
      </div>
    );
  }

  const listaErros = (Object.keys(erros) as CampoId[]).filter((k) => erros[k]);

  return (
    <form
      onSubmit={submeter}
      noValidate
      className="rounded-sm border border-border bg-night-soft p-6 sm:p-8"
    >
      <div ref={resumoRef} tabIndex={-1} role="alert" aria-live="assertive" className="focus-tech">
        {listaErros.length > 0 && (
          <div className="rounded-sm border border-orange/60 bg-orange/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-orange">
              <AlertCircle className="size-4" aria-hidden="true" />
              {listaErros.length === 1
                ? "Falta corrigir 1 campo antes de continuar."
                : `Faltam corrigir ${listaErros.length} campos antes de continuar.`}
            </p>
          </div>
        )}
        {erroApi && (
          <div className="mt-4 rounded-sm border border-orange/60 bg-orange/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-orange">
              <AlertCircle className="size-4" aria-hidden="true" />
              {erroApi}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-orange">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`${campo} ${erros.email ? campoErro : ""}`}
          value={v.email}
          aria-invalid={!!erros.email}
          aria-describedby={erros.email ? "erro-email" : undefined}
          onChange={(e) => setV({ ...v, email: e.target.value })}
          placeholder="nome@exemplo.pt"
        />
        {erros.email && <MensagemErro id="erro-email" texto={erros.email} />}
      </div>

      <div className="mt-6">
        <label htmlFor="morada" className="text-sm font-medium">
          Morada
        </label>
        <input
          id="morada"
          name="morada"
          autoComplete="street-address"
          className={campo}
          value={v.morada}
          onChange={(e) => setV({ ...v, morada: e.target.value })}
          placeholder="Rua, número, localidade"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="nif" className="text-sm font-medium">
          NIF
        </label>
        <input
          id="nif"
          name="nif"
          inputMode="numeric"
          maxLength={9}
          className={`${campo} ${erros.nif ? campoErro : ""}`}
          value={v.nif}
          aria-invalid={!!erros.nif}
          aria-describedby={erros.nif ? "erro-nif" : undefined}
          onChange={(e) => setV({ ...v, nif: e.target.value })}
          placeholder="Opcional"
        />
        {erros.nif && <MensagemErro id="erro-nif" texto={erros.nif} />}
      </div>

      <div className="mt-6">
        <label htmlFor="password" className="text-sm font-medium">
          Password <span className="text-orange">*</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          className={`${campo} ${erros.password ? campoErro : ""}`}
          value={v.password}
          aria-invalid={!!erros.password}
          aria-describedby={erros.password ? "erro-password" : "ajuda-password"}
          onChange={(e) => setV({ ...v, password: e.target.value })}
          placeholder="Mínimo 10 caracteres"
        />
        {erros.password ? (
          <MensagemErro id="erro-password" texto={erros.password} />
        ) : (
          <p id="ajuda-password" className="mt-2 text-xs text-muted-foreground">
            Mínimo 10 caracteres.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={aEnviar}
        className="focus-tech mt-8 flex min-h-12 w-full items-center justify-center rounded-sm bg-orange px-6 text-sm font-semibold uppercase tracking-wide text-night transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
      >
        {aEnviar ? "A ativar…" : "Ativar conta"}
      </button>
    </form>
  );
}
