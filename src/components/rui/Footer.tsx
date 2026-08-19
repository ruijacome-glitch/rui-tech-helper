import { Link } from "@tanstack/react-router";
import { navegacao, contacto } from "@/data/site";
import { abrirGestorCookies } from "@/lib/cookie-consent";
import { LogoMark, Wordmark } from "./Brand";
import { CopyButton } from "./CopyButton";

export function Footer() {
  return (
    <footer className="border-t border-border bg-night py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="O Rui dos Computadores — início">
            <LogoMark />
            <Wordmark />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Assistência informática em Cascais e arredores. Ao domicílio, remota e sem conversa
            técnica.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="label-tech text-steel">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navegacao.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  className="text-muted-foreground hover:text-foreground data-[status=active]:text-foreground"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-tech text-steel">Falar comigo</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/contactos" className="text-muted-foreground hover:text-foreground">
                Formulário de contacto
              </Link>
            </li>
            <li className="text-muted-foreground">{contacto.area}</li>
            <li className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <span>Telefone:</span>
              <a
                href={`tel:${(contacto.telefone || "").replace(/\s/g, "")}`}
                className="hover:text-foreground"
              >
                {contacto.telefone || contacto.placeholder}
              </a>
              <CopyButton valor={contacto.telefone} rotulo="Telefone" />
            </li>
            <li className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <span>Email:</span>
              <a href={`mailto:${contacto.email}`} className="hover:text-foreground">
                {contacto.email || contacto.placeholder}
              </a>
              <CopyButton valor={contacto.email} rotulo="Email" />
            </li>

          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border px-4 pt-6 sm:px-6">
        <nav aria-label="Informação legal">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <li>
              <Link to="/termos-legais" className="text-muted-foreground hover:text-foreground">
                Termos legais
              </Link>
            </li>
            <li>
              <Link to="/privacidade" className="text-muted-foreground hover:text-foreground">
                Privacidade
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={abrirGestorCookies}
                className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Gerir cookies
              </button>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="label-tech text-steel">RUI_OS v3.1 — obrigado pela confiança.</p>
          <p className="label-tech text-steel">
            © {new Date().getFullYear()} O Rui dos Computadores
          </p>
        </div>
      </div>
    </footer>
  );
}
