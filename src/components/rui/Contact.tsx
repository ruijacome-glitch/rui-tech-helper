import { MapPin, Phone, Mail } from "lucide-react";
import { contacto as contactoEstatico } from "@/data/site";
import { useConteudoSite } from "@/lib/conteudoSite";
import { CopyButton } from "./CopyButton";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { data } = useConteudoSite();
  const contacto = { ...contactoEstatico, ...data.contacto };
  const telefoneLabel = contacto.telefone || contactoEstatico.placeholder;
  const emailLabel = contacto.email || contactoEstatico.placeholder;

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

        <ContactForm />
      </div>
    </section>
  );
}
