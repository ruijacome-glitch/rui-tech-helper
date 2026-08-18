import { navegacao, whatsappHref } from "@/data/site";
import { LogoMark, Wordmark } from "./Brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-night py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          {/* Substituir por /logo.svg quando o ficheiro final for enviado. */}
          <div className="flex items-center gap-3">
            <LogoMark />
            <Wordmark />
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Assistência informática em Cascais e arredores. Ao domicílio, remota e sem conversa
            técnica.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="label-tech text-steel">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navegacao.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="text-muted-foreground hover:text-foreground">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-tech text-steel">Falar comigo</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={whatsappHref} className="text-muted-foreground hover:text-foreground">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#contactos" className="text-muted-foreground hover:text-foreground">
                Formulário de contacto
              </a>
            </li>
            <li className="text-muted-foreground">Cascais e arredores</li>
            <li>
              <a href="#contactos" className="text-muted-foreground hover:text-foreground">
                Política de privacidade
              </a>
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
