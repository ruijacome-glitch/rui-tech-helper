import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navegacao } from "@/data/site";
import { LogoMark, Wordmark } from "./Brand";

export function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-night/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <a href="#topo" className="flex min-w-0 items-center gap-3" aria-label="O Rui dos Computadores — início">
          <LogoMark />
          <Wordmark className="min-w-0" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contactos"
            className="inline-flex min-h-11 items-center rounded-sm bg-orange px-5 text-sm font-semibold uppercase tracking-wide text-night transition-transform hover:-translate-y-0.5"
          >
            Pedir ajuda
          </a>
        </div>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="grid size-11 shrink-0 place-items-center rounded-sm border border-border text-foreground lg:hidden"
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {aberto && (
        <nav id="menu-mobile" aria-label="Principal (telemóvel)" className="border-t border-border bg-night lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navegacao.map((item) => (
              <li key={item.href} className="border-b border-border/50 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="block py-3 text-base text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#contactos"
                onClick={() => setAberto(false)}
                className="flex min-h-11 items-center justify-center rounded-sm bg-orange px-5 font-semibold uppercase tracking-wide text-night"
              >
                Pedir ajuda
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
