import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navegacao } from "@/data/site";
import { LogoMark, Wordmark } from "./Brand";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-night/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <Link
          to="/"
          onClick={fechar}
          className="flex min-w-0 items-center gap-3"
          aria-label="O Rui dos Computadores — início"
        >
          <LogoMark className="size-12 lg:size-14" />
          <Wordmark className="min-w-0 text-lg lg:text-xl" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navegacao.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-electric-soft after:transition-transform hover:after:scale-x-100 data-[status=active]:text-foreground data-[status=active]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contactos"
            className="inline-flex min-h-11 items-center rounded-sm bg-orange px-5 text-sm font-semibold uppercase tracking-wide text-night transition-transform hover:-translate-y-0.5"
          >
            Pedir ajuda
          </Link>
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
        <nav
          id="menu-mobile"
          aria-label="Principal (telemóvel)"
          className="border-t border-border bg-night lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navegacao.map((item) => (
              <li key={item.to} className="border-b border-border/50 last:border-0">
                <Link
                  to={item.to}
                  onClick={fechar}
                  className="block py-3 text-base text-foreground data-[status=active]:text-electric-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                to="/contactos"
                onClick={fechar}
                className="flex min-h-11 items-center justify-center rounded-sm bg-orange px-5 font-semibold uppercase tracking-wide text-night"
              >
                Pedir ajuda
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
