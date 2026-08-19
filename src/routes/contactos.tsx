import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageShell, PageHero, HeroMascot } from "@/components/rui/PageShell";
import { ContactForm } from "@/components/rui/ContactForm";
import { contacto, telefoneLabel, emailLabel } from "@/data/site";
import { antesDeEnviares } from "@/data/paginas";
import contactosHeroAsset from "@/assets/contactos-hero.png.asset.json";

const titulo = "Contactos | O Rui dos Computadores — Cascais";
const descricao =
  "Conta-me o que se passa com o teu computador. Assistência informática em Cascais e arredores, ao domicílio ou remota.";

type Busca = { problema?: string | undefined };

export const Route = createFileRoute("/contactos")({
  validateSearch: (search: Record<string, unknown>): Busca => ({
    problema: typeof search['problema'] === "string" ? (search['problema'] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactosPage,
});

function ContactosPage() {
  const { problema } = Route.useSearch();

  return (
    <PageShell>
      <PageHero
        pagina="Contactos"
        etiqueta="// Início do diagnóstico"
        titulo={
          <>
            Conta-me
            <br />o que se passa.
          </>
        }
        intro="Escreve à tua maneira. Não é um formulário administrativo — é a primeira etapa do diagnóstico."
        aside={
          <HeroMascot
            src={contactosHeroAsset.url}
            alt="Ilustração do Rui com headset, portátil e telemóvel, pronto para atender o teu pedido"
          />
        }
      />

      <section className="bg-night py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="label-tech text-electric-soft">// Antes de enviares</h2>
            <ol className="mt-6 space-y-6">
              {antesDeEnviares.map((d) => (
                <li key={d.numero} className="border-l-2 border-electric/40 pl-4">
                  <p className="label-tech text-steel">{d.numero}</p>
                  <h3 className="mt-1 display-xl text-lg">{d.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.texto}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-border pt-8">
              <h2 className="label-tech text-steel">Onde estou</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="size-5 shrink-0 text-electric-soft" aria-hidden="true" />
                  <span>Área de atendimento: {contacto.area}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-electric-soft" aria-hidden="true" />
                  <span className={contacto.telefone ? "" : "text-muted-foreground"}>
                    {telefoneLabel}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-electric-soft" aria-hidden="true" />
                  <span className={contacto.email ? "" : "text-muted-foreground"}>
                    {emailLabel}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <ContactForm problemaInicial={problema ?? ""} />
        </div>
      </section>
    </PageShell>
  );
}
