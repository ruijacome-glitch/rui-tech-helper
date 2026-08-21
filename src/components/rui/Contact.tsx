import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { contacto as contactoEstatico, sintomas } from "@/data/site";
import { useConteudoSite } from "@/lib/conteudoSite";
import { CopyButton } from "./CopyButton";

type Erros = { nome?: string; contactoValor?: string; mensagem?: string };

export function Contact() {
  const { data } = useConteudoSite();
  const contacto = { ...contactoEstatico, ...data.contacto };
  const telefoneLabel = contacto.telefone || contactoEstatico.placeholder;
  const emailLabel = contacto.email || contactoEstatico.placeholder;
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<Erros>({});
  const [valores, setValores] = useState({
    nome: "",
    contactoValor: "",
    mensagem: "",
    preferencia: "WhatsApp",
    assunto: "",
  });

  function validar(): Erros {
    const e: Erros = {};
    if (valores.nome.trim().length < 2) e.nome = "Indica o teu nome.";
    if (valores.contactoValor.trim().length < 6)
      e.contactoValor = "Indica um telefone ou email para te responder.";
    if (valores.mensagem.trim().length < 10)
      e.mensagem = "Descreve em poucas palavras o que se passa.";
    return e;
  }

  function submeter(ev: FormEvent) {
    ev.preventDefault();
    const e = validar();
    setErros(e);
    // Apenas interface: nada é enviado nem guardado.
    if (Object.keys(e).length === 0) setEnviado(true);
  }

  const campo =
    "mt-2 w-full rounded-sm border border-input bg-night px-4 py-3 text-foreground placeholder:text-muted-foreground";

  return (
    <section id="contactos" className="bg-night py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="label-tech text-electric-soft">// Contactos</p>
          <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)]">Conta-me o problema.</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Escreve à tua maneira. Eu trato de traduzir para linguagem técnica — e depois de a
            resolver.
          </p>

          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="size-5 shrink-0 text-electric-soft" aria-hidden="true" />
              <span>{contacto.area}</span>
            </li>
            <li className="flex flex-wrap items-center gap-3">
              <Phone className="size-5 shrink-0 text-electric-soft" aria-hidden="true" />
              <a
                href={`tel:${(contacto.telefone || "").replace(/\s/g, "")}`}
                className={contacto.telefone ? "hover:text-electric-soft" : "text-muted-foreground"}
              >
                {telefoneLabel}
              </a>
              <CopyButton valor={contacto.telefone} rotulo="Telefone" />
            </li>
            <li className="flex flex-wrap items-center gap-3">
              <Mail className="size-5 shrink-0 text-electric-soft" aria-hidden="true" />
              <a
                href={`mailto:${contacto.email}`}
                className={contacto.email ? "hover:text-electric-soft" : "text-muted-foreground"}
              >
                {emailLabel}
              </a>
              <CopyButton valor={contacto.email} rotulo="Email" />
            </li>
          </ul>
        </div>

        <div className="rounded-sm border border-border bg-night-soft p-6 sm:p-8">
          {enviado ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-10 text-electric-soft" aria-hidden="true" />
              <h3 className="mt-4 display-xl text-2xl">Pedido registado</h3>
              <p className="mt-3 text-muted-foreground">
                Obrigado, {valores.nome.split(" ")[0]}. Esta é uma confirmação de demonstração — o
                formulário ainda não envia dados.
              </p>
              <button
                type="button"
                onClick={() => setEnviado(false)}
                className="mt-6 min-h-11 rounded-sm border border-steel/50 px-5 text-sm font-semibold uppercase tracking-wide"
              >
                Escrever outro pedido
              </button>
            </div>
          ) : (
            <form onSubmit={submeter} noValidate>
              <div>
                <label htmlFor="nome" className="text-sm font-medium">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  className={campo}
                  value={valores.nome}
                  aria-invalid={!!erros.nome}
                  aria-describedby={erros.nome ? "erro-nome" : undefined}
                  onChange={(e) => setValores({ ...valores, nome: e.target.value })}
                  placeholder="Como te chamas?"
                />
                {erros.nome && (
                  <p id="erro-nome" className="mt-2 text-sm text-orange">
                    {erros.nome}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="contacto" className="text-sm font-medium">
                  Contacto
                </label>
                <input
                  id="contacto"
                  name="contacto"
                  className={campo}
                  value={valores.contactoValor}
                  aria-invalid={!!erros.contactoValor}
                  aria-describedby={erros.contactoValor ? "erro-contacto" : undefined}
                  onChange={(e) => setValores({ ...valores, contactoValor: e.target.value })}
                  placeholder="Telefone ou email"
                />
                {erros.contactoValor && (
                  <p id="erro-contacto" className="mt-2 text-sm text-orange">
                    {erros.contactoValor}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="assunto" className="text-sm font-medium">
                  Sintoma (opcional)
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  className={campo}
                  value={valores.assunto}
                  onChange={(e) => setValores({ ...valores, assunto: e.target.value })}
                >
                  <option value="">Sem sintoma específico</option>
                  {sintomas.map((s) => (
                    <option key={s.id} value={s.titulo}>
                      {s.titulo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="mensagem" className="text-sm font-medium">
                  O que se passa
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className={campo}
                  value={valores.mensagem}
                  aria-invalid={!!erros.mensagem}
                  aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
                  onChange={(e) => setValores({ ...valores, mensagem: e.target.value })}
                  placeholder="Descreve por palavras tuas."
                />
                {erros.mensagem && (
                  <p id="erro-mensagem" className="mt-2 text-sm text-orange">
                    {erros.mensagem}
                  </p>
                )}
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium">Como preferes ser contactado</legend>
                <div className="mt-3 flex flex-wrap gap-4">
                  {["WhatsApp", "Telefone", "Email"].map((op) => (
                    <label key={op} className="flex min-h-11 items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="preferencia"
                        value={op}
                        checked={valores.preferencia === op}
                        onChange={() => setValores({ ...valores, preferencia: op })}
                        className="size-4 accent-[var(--color-electric)]"
                      />
                      {op}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-orange px-6 font-semibold uppercase tracking-wide text-night"
              >
                Enviar pedido
              </button>
              <p className="label-tech mt-4 text-steel">
                Formulário de demonstração — nenhum dado é enviado.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
