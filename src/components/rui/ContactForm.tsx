import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { tiposProblema, periodosContacto } from "@/data/paginas";

type Erros = Partial<Record<"nome" | "contactoValor" | "mensagem" | "localidade", string>>;

const campo =
  "mt-2 w-full rounded-sm border border-input bg-night px-4 py-3 text-foreground placeholder:text-muted-foreground";

export function ContactForm({ problemaInicial = "" }: { problemaInicial?: string }) {
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [v, setV] = useState({
    nome: "",
    contactoValor: "",
    preferencia: "WhatsApp",
    problema: tiposProblema.includes(problemaInicial) ? problemaInicial : "",
    mensagem: "",
    localidade: "",
    periodo: "Indiferente",
  });

  function submeter(ev: FormEvent) {
    ev.preventDefault();
    const e: Erros = {};
    if (v.nome.trim().length < 2) e.nome = "Indica o teu nome.";
    if (v.contactoValor.trim().length < 6)
      e.contactoValor = "Indica um telefone ou email para te responder.";
    if (v.mensagem.trim().length < 10) e.mensagem = "Descreve em poucas palavras o que se passa.";
    if (v.localidade.trim().length < 2) e.localidade = "Indica a localidade.";
    setErros(e);
    // Apenas interface: nada é enviado nem guardado.
    if (Object.keys(e).length === 0) setEnviado(true);
  }

  if (enviado) {
    return (
      <div
        role="status"
        className="rounded-sm border border-electric/40 bg-night-soft p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-electric-soft" aria-hidden="true" />
        <h2 className="mt-4 display-xl text-2xl">Pedido registado</h2>
        <p className="mt-3 text-muted-foreground">
          Obrigado, {v.nome.split(" ")[0]}. Esta é uma confirmação de demonstração — o formulário
          ainda não envia dados para lado nenhum.
        </p>
        <button
          type="button"
          onClick={() => setEnviado(false)}
          className="mt-6 min-h-11 rounded-sm border border-steel/50 px-5 text-sm font-semibold uppercase tracking-wide"
        >
          Escrever outro pedido
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={submeter}
      noValidate
      className="rounded-sm border border-border bg-night-soft p-6 sm:p-8"
    >
      <p className="label-tech text-steel">Diagnóstico // passo 1 de 1</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="text-sm font-medium">
            Nome
          </label>
          <input
            id="nome"
            className={campo}
            value={v.nome}
            aria-invalid={!!erros.nome}
            aria-describedby={erros.nome ? "erro-nome" : undefined}
            onChange={(e) => setV({ ...v, nome: e.target.value })}
            placeholder="Como te chamas?"
          />
          {erros.nome && (
            <p id="erro-nome" className="mt-2 text-sm text-orange">
              {erros.nome}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contactoValor" className="text-sm font-medium">
            Contacto
          </label>
          <input
            id="contactoValor"
            className={campo}
            value={v.contactoValor}
            aria-invalid={!!erros.contactoValor}
            aria-describedby={erros.contactoValor ? "erro-contacto" : undefined}
            onChange={(e) => setV({ ...v, contactoValor: e.target.value })}
            placeholder="Telefone ou email"
          />
          {erros.contactoValor && (
            <p id="erro-contacto" className="mt-2 text-sm text-orange">
              {erros.contactoValor}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-medium">Como preferes ser contactado</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {["WhatsApp", "Telefone", "Email"].map((op) => (
            <label
              key={op}
              className={`min-h-11 cursor-pointer rounded-sm border px-4 py-2.5 text-sm transition-colors ${
                v.preferencia === op
                  ? "border-electric bg-electric/10 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <input
                type="radio"
                name="preferencia"
                value={op}
                checked={v.preferencia === op}
                onChange={() => setV({ ...v, preferencia: op })}
                className="sr-only"
              />
              {op}
            </label>
          ))}
        </div>
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
          O que está a acontecer
        </label>
        <textarea
          id="mensagem"
          rows={5}
          className={campo}
          value={v.mensagem}
          aria-invalid={!!erros.mensagem}
          aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
          onChange={(e) => setV({ ...v, mensagem: e.target.value })}
          placeholder="Escreve à tua maneira. Não precisas de linguagem técnica."
        />
        {erros.mensagem && (
          <p id="erro-mensagem" className="mt-2 text-sm text-orange">
            {erros.mensagem}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="localidade" className="text-sm font-medium">
          Localidade
        </label>
        <input
          id="localidade"
          className={campo}
          value={v.localidade}
          aria-invalid={!!erros.localidade}
          aria-describedby={erros.localidade ? "erro-localidade" : undefined}
          onChange={(e) => setV({ ...v, localidade: e.target.value })}
          placeholder="Cascais, Estoril, Alcabideche…"
        />
        {erros.localidade && (
          <p id="erro-localidade" className="mt-2 text-sm text-orange">
            {erros.localidade}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="mt-8 flex min-h-12 w-full items-center justify-center rounded-sm bg-orange px-6 text-sm font-semibold uppercase tracking-wide text-night transition-transform hover:-translate-y-0.5"
      >
        Enviar pedido
      </button>
      <p className="mt-4 text-xs text-muted-foreground">
        Este formulário funciona apenas no teu navegador. Nada é guardado nem enviado.
      </p>
    </form>
  );
}
