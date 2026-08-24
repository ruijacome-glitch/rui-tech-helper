import { useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { tiposProblema, periodosContacto } from "@/data/paginas";

const CONTACTO_API_URL = "https://api.oruidoscomputadores.pt/api/public/contacto";

type CampoId = "nome" | "contactoValor" | "preferencia" | "mensagem" | "localidade";
type Erros = Partial<Record<CampoId, string>>;

const preferencias = ["WhatsApp", "Telefone", "Email"] as const;

const campo =
  "focus-tech mt-2 w-full rounded-sm border border-input bg-night px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground hover:border-steel";
const campoErro = "border-orange";

const rotulos: Record<CampoId, string> = {
  nome: "Nome",
  contactoValor: "Contacto",
  preferencia: "Como preferes ser contactado",
  mensagem: "O que está a acontecer",
  localidade: "Localidade",
};

function MensagemErro({ id, texto }: { id: string; texto: string }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-orange">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>{texto}</span>
    </p>
  );
}

export function ContactForm({ problemaInicial = "" }: { problemaInicial?: string }) {
  const [enviado, setEnviado] = useState(false);
  const [aEnviar, setAEnviar] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const resumoRef = useRef<HTMLDivElement>(null);
  const [v, setV] = useState({
    nome: "",
    contactoValor: "",
    preferencia: "" as string,
    problema: tiposProblema.includes(problemaInicial) ? problemaInicial : "",
    mensagem: "",
    localidade: "",
    periodo: "Indiferente",
  });

  function validar(): Erros {
    const e: Erros = {};
    const nome = v.nome.trim();
    const contacto = v.contactoValor.trim();

    if (!nome) e.nome = "O nome é obrigatório. Escreve como queres que te trate.";
    else if (nome.length < 2) e.nome = "O nome parece demasiado curto (mínimo 2 letras).";
    else if (nome.length > 80) e.nome = "O nome não pode ultrapassar 80 caracteres.";

    const ehEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(contacto);
    const ehTelefone = /^(\+?\d[\d\s.-]{7,17})$/.test(contacto);
    if (!contacto)
      e.contactoValor = "Preciso de um contacto para te responder: telemóvel ou email.";
    else if (!ehEmail && !ehTelefone)
      e.contactoValor =
        "Formato não reconhecido. Exemplos válidos: 912 345 678 ou nome@exemplo.pt";

    if (!v.preferencia)
      e.preferencia = "Escolhe uma forma de contacto: WhatsApp, Telefone ou Email.";
    else if (v.preferencia === "Email" && !ehEmail)
      e.preferencia = "Escolheste Email, por isso indica um endereço de email no campo Contacto.";
    else if (v.preferencia !== "Email" && !ehTelefone)
      e.preferencia =
        "Para WhatsApp ou Telefone indica um número de telefone no campo Contacto.";

    const msg = v.mensagem.trim();
    if (!msg) e.mensagem = "Descreve o problema, mesmo que em poucas palavras.";
    else if (msg.length < 10) e.mensagem = "Acrescenta um pouco mais de detalhe (mínimo 10 caracteres).";
    else if (msg.length > 1500) e.mensagem = "A descrição não pode ultrapassar 1500 caracteres.";

    const loc = v.localidade.trim();
    if (!loc) e.localidade = "Indica a localidade para saber se é ao domicílio ou remoto.";
    else if (loc.length < 2) e.localidade = "A localidade parece demasiado curta.";

    return e;
  }

  async function submeter(ev: FormEvent) {
    ev.preventDefault();
    const e = validar();
    setErros(e);

    if (Object.keys(e).length > 0) {
      requestAnimationFrame(() => {
        resumoRef.current?.focus();
        resumoRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      });
      return;
    }

    setAEnviar(true);
    setErroEnvio(false);
    try {
      const res = await fetch(CONTACTO_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: v.nome.trim(),
          contactoValor: v.contactoValor.trim(),
          preferencia: v.preferencia,
          problema: v.problema || null,
          mensagem: v.mensagem.trim(),
          localidade: v.localidade.trim(),
          periodo: v.periodo,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setEnviado(true);
    } catch {
      setErroEnvio(true);
      requestAnimationFrame(() => {
        resumoRef.current?.focus();
        resumoRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      });
    } finally {
      setAEnviar(false);
    }
  }

  if (enviado) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-sm border border-electric/40 bg-night-soft p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-electric-soft" aria-hidden="true" />
        <h2 className="mt-4 display-xl text-2xl">Pedido enviado</h2>
        <p className="mt-3 text-muted-foreground">
          Obrigado, {v.nome.trim().split(" ")[0]}. Registei a preferência de contacto por{" "}
          <strong className="text-foreground">{v.preferencia}</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Respondo assim que possível. Se for urgente, usa o WhatsApp ou o telefone indicados
          nesta página.
        </p>
        <button
          type="button"
          onClick={() => {
            setErros({});
            setEnviado(false);
          }}
          className="focus-tech mt-6 min-h-11 rounded-sm border border-steel/50 px-5 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-electric hover:text-electric-soft active:translate-y-px"
        >
          Escrever outro pedido
        </button>
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
      <p className="label-tech text-steel">Diagnóstico // passo 1 de 1</p>

      <div
        ref={resumoRef}
        tabIndex={-1}
        role="alert"
        aria-live="assertive"
        className="focus-tech"
      >
        {listaErros.length > 0 && (
          <div className="mt-6 rounded-sm border border-orange/60 bg-orange/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-orange">
              <AlertCircle className="size-4" aria-hidden="true" />
              {listaErros.length === 1
                ? "Falta corrigir 1 campo antes de continuar."
                : `Faltam corrigir ${listaErros.length} campos antes de continuar.`}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {listaErros.map((k) => (
                <li key={k}>
                  <a
                    href={`#${k === "preferencia" ? "preferencia-WhatsApp" : k}`}
                    className="focus-tech underline decoration-orange/50 underline-offset-4 hover:text-foreground"
                  >
                    {rotulos[k]}: {erros[k]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        {erroEnvio && (
          <div className="mt-6 rounded-sm border border-orange/60 bg-orange/10 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-orange">
              <AlertCircle className="size-4" aria-hidden="true" />
              Não consegui enviar o pedido. Tenta outra vez ou usa o WhatsApp/telefone indicados
              nesta página.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="text-sm font-medium">
            Nome <span className="text-orange">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            autoComplete="name"
            className={`${campo} ${erros.nome ? campoErro : ""}`}
            value={v.nome}
            aria-invalid={!!erros.nome}
            aria-describedby={erros.nome ? "erro-nome" : undefined}
            onChange={(e) => setV({ ...v, nome: e.target.value })}
            placeholder="Como te chamas?"
          />
          {erros.nome && <MensagemErro id="erro-nome" texto={erros.nome} />}
        </div>

        <div>
          <label htmlFor="contactoValor" className="text-sm font-medium">
            Contacto <span className="text-orange">*</span>
          </label>
          <input
            id="contactoValor"
            name="contactoValor"
            autoComplete="tel"
            className={`${campo} ${erros.contactoValor ? campoErro : ""}`}
            value={v.contactoValor}
            aria-invalid={!!erros.contactoValor}
            aria-describedby={
              erros.contactoValor ? "erro-contacto ajuda-contacto" : "ajuda-contacto"
            }
            onChange={(e) => setV({ ...v, contactoValor: e.target.value })}
            placeholder="912 345 678 ou nome@exemplo.pt"
          />
          <p id="ajuda-contacto" className="mt-2 text-xs text-muted-foreground">
            Telemóvel ou email — é por aqui que te respondo.
          </p>
          {erros.contactoValor && (
            <MensagemErro id="erro-contacto" texto={erros.contactoValor} />
          )}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">
          Como preferes ser contactado <span className="text-orange">*</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {preferencias.map((op) => (
            <label
              key={op}
              htmlFor={`preferencia-${op}`}
              className={`flex min-h-11 cursor-pointer items-center rounded-sm border px-4 py-2.5 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-electric-soft active:translate-y-px ${
                v.preferencia === op
                  ? "border-electric bg-electric/15 text-foreground"
                  : `${erros.preferencia ? "border-orange" : "border-border"} text-muted-foreground hover:border-electric/60 hover:text-foreground`
              }`}
            >
              <input
                id={`preferencia-${op}`}
                type="radio"
                name="preferencia"
                value={op}
                checked={v.preferencia === op}
                aria-invalid={!!erros.preferencia}
                aria-describedby={erros.preferencia ? "erro-preferencia" : undefined}
                onChange={() => setV({ ...v, preferencia: op })}
                className="sr-only"
              />
              {op}
            </label>
          ))}
        </div>
        {erros.preferencia && (
          <MensagemErro id="erro-preferencia" texto={erros.preferencia} />
        )}
      </fieldset>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="problema" className="text-sm font-medium">
            Tipo de problema
          </label>
          <select
            id="problema"
            className={campo}
            value={v.problema}
            onChange={(e) => setV({ ...v, problema: e.target.value })}
          >
            <option value="">Escolhe uma opção</option>
            {tiposProblema.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="periodo" className="text-sm font-medium">
            Melhor período para contacto
          </label>
          <select
            id="periodo"
            className={campo}
            value={v.periodo}
            onChange={(e) => setV({ ...v, periodo: e.target.value })}
          >
            {periodosContacto.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="mensagem" className="text-sm font-medium">
          O que está a acontecer <span className="text-orange">*</span>
        </label>
        <textarea
          id="mensagem"
          rows={5}
          className={`${campo} ${erros.mensagem ? campoErro : ""}`}
          value={v.mensagem}
          maxLength={1500}
          aria-invalid={!!erros.mensagem}
          aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
          onChange={(e) => setV({ ...v, mensagem: e.target.value })}
          placeholder="Escreve à tua maneira. Não precisas de linguagem técnica."
        />
        {erros.mensagem && <MensagemErro id="erro-mensagem" texto={erros.mensagem} />}
      </div>

      <div className="mt-6">
        <label htmlFor="localidade" className="text-sm font-medium">
          Localidade <span className="text-orange">*</span>
        </label>
        <input
          id="localidade"
          name="localidade"
          autoComplete="address-level2"
          className={`${campo} ${erros.localidade ? campoErro : ""}`}
          value={v.localidade}
          aria-invalid={!!erros.localidade}
          aria-describedby={erros.localidade ? "erro-localidade" : undefined}
          onChange={(e) => setV({ ...v, localidade: e.target.value })}
          placeholder="Cascais, Estoril, Alcabideche…"
        />
        {erros.localidade && <MensagemErro id="erro-localidade" texto={erros.localidade} />}
      </div>

      <button
        type="submit"
        disabled={aEnviar}
        className="focus-tech mt-8 flex min-h-12 w-full items-center justify-center rounded-sm bg-orange px-6 text-sm font-semibold uppercase tracking-wide text-night transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
      >
        {aEnviar ? "A enviar…" : "Enviar pedido"}
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Os dados são enviados diretamente para o Rui, só para responder ao teu pedido.
      </p>
    </form>
  );
}
