/**
 * Dados estruturados schema.org — Organization e LocalBusiness.
 * Baseados exclusivamente nos dados confirmados em src/data/legal.ts e src/data/site.ts.
 */
import { contacto } from "@/data/site";
import { legal } from "@/data/legal";
import { faq } from "@/data/paginas";

export const SITE_URL = "https://oruidoscomputadores.pt";

const telefone = contacto.telefone || undefined;
const email = contacto.email || undefined;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: legal.nomeComercial,
  legalName: legal.nomeLegal || undefined,
  vatID: legal.nif ? `PT${legal.nif}` : undefined,
  taxID: legal.nif || undefined,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email,
  telephone: telefone,
  areaServed: contacto.area,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: telefone,
      email,
      areaServed: "PT",
      availableLanguage: ["pt-PT"],
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: legal.nomeComercial,
  legalName: legal.nomeLegal || undefined,
  vatID: legal.nif ? `PT${legal.nif}` : undefined,
  taxID: legal.nif || undefined,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: telefone,
  email,
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Cascais" },
    { "@type": "AdministrativeArea", name: "Cascais e arredores" },
  ],
  address: { "@type": "PostalAddress", addressLocality: "Cascais", addressCountry: "PT" },
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  knowsLanguage: ["pt-PT"],
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/sobre-o-rui#person`,
  name: "Rui Jácome",
  jobTitle: "Especialista técnico sénior",
  url: `${SITE_URL}/sobre-o-rui`,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Reparação de computadores",
    "Redes informáticas",
    "Recuperação de dados",
    "Suporte técnico",
  ],
  knowsLanguage: ["pt-PT"],
};

/** Entradas prontas para o campo `scripts` do head() das rotas. */
export const schemaScripts = [
  { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
  { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
];

/** Só para /sobre-o-rui — inclui Person além dos schemas base. */
export const schemaScriptsSobre = [
  ...schemaScripts,
  { type: "application/ld+json", children: JSON.stringify(personSchema) },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.pergunta,
    acceptedAnswer: { "@type": "Answer", text: f.resposta },
  })),
};

/** Só para /como-funciona — inclui FAQPage além dos schemas base. */
export const schemaScriptsComoFunciona = [
  ...schemaScripts,
  { type: "application/ld+json", children: JSON.stringify(faqSchema) },
];
