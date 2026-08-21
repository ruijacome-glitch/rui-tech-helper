import { useQuery } from "@tanstack/react-query";
import { fetchConteudoSite, conteudoSiteFallback } from "@/lib/conteudoSite";

export function Pricing() {
  const { data } = useQuery({
    queryKey: ["conteudo-site"],
    queryFn: fetchConteudoSite,
    initialData: conteudoSiteFallback,
    staleTime: 60_000,
  });
  const precos = data.precosHome;

  return (
    <section id="precario" className="bg-night py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="label-tech text-electric-soft">// Preçário</p>
        <h2 className="mt-4 display-xl text-[clamp(2rem,6vw,3.5rem)]">
          Preços claros, sem surpresas.
        </h2>

        <ul className="mt-12 border-t border-border">
          {precos.map((p) => (
            <li
              key={p.servico}
              className="grid gap-2 border-b border-border py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
            >
              <div className="min-w-0">
                <h3 className="display-xl text-2xl">{p.servico}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.nota}</p>
              </div>
              <p className="label-tech rounded-sm border border-electric/40 px-3 py-2 text-electric-soft sm:justify-self-end">
                {p.valor}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-muted-foreground">O valor é sempre confirmado antes de avançar.</p>
      </div>
    </section>
  );
}
