import { Link } from "@tanstack/react-router";
import { navegacao, contacto } from "@/data/site";
import { abrirGestorCookies } from "@/lib/cookie-consent";
import { LogoMark, Wordmark } from "./Brand";

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
            <li className="text-muted-foreground">
              Telefone e email: {contacto.telefone || contacto.placeholder}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-border px-4 pt-6 sm:px-6">
        <p className="label-tech text-steel">RUI_OS v3.1 — obrigado pela confiança.</p>
        <p className="label-tech text-steel">© {new Date().getFullYear()} O Rui dos Computadores</p>
      </div>
    </footer>
  );
}
