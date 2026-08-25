/**
 * Dados estruturados schema.org — Organization e LocalBusiness.
 * Baseados exclusivamente nos dados confirmados em src/data/legal.ts e src/data/site.ts.
 */
import { contacto, servicos, precos, precarioAreas } from "@/data/site";
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

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: legal.nomeComercial,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "pt-PT",
};

/** Entradas prontas para o campo `scripts` do head() das rotas. */
export const schemaScripts = [
  { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
  { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
  { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
];

/** BreadcrumbList Início → página actual, a juntar ao `scripts` de cada rota interna. */
export function breadcrumbScript(pagina: string, path: string) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: pagina, item: `${SITE_URL}${path}` },
    ],
  };
  return { type: "application/ld+json", children: JSON.stringify(schema) };
}

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

export const servicoSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/servicos#service`,
  provider: { "@id": `${SITE_URL}/#localbusiness` },
  areaServed: contacto.area,
  serviceType: "Reparação e assistência técnica de computadores",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: servicos.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.titulo, description: s.detalhe },
    })),
  },
};

/** Só para /servicos — inclui Service/OfferCatalog além dos schemas base. */
export const schemaScriptsServicos = [
  ...schemaScripts,
  { type: "application/ld+json", children: JSON.stringify(servicoSchema) },
];

/** desde X € → minPrice; valor fixo (ex. "39 €") → price exacto; sem número (ex. orçamentação) → sem preço. */
function parsePreco(valor: string): { price: string } | { minPrice: string } | undefined {
  const desde = valor.match(/desde\s+(\d+)\s*€/i);
  if (desde?.[1]) return { minPrice: desde[1] };
  const fixo = valor.match(/^(\d+)\s*€$/);
  if (fixo?.[1]) return { price: fixo[1] };
  return undefined;
}

function precoParaOferta(nome: string, valor: string, nota: string) {
  const preco = parsePreco(valor);
  if (!preco) return undefined;
  const base = {
    "@type": "Offer",
    name: nome,
    description: nota,
    seller: { "@id": `${SITE_URL}/#localbusiness` },
  };
  return "price" in preco
    ? { ...base, priceCurrency: "EUR", price: preco.price }
    : {
        ...base,
        priceCurrency: "EUR",
        priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "EUR", minPrice: preco.minPrice },
      };
}

export const precarioOfferSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/precario#offers`,
  name: "Preçário",
  itemListElement: [
    ...precos.map((p) => precoParaOferta(p.servico, p.valor, p.nota)),
    ...precarioAreas.map((a) => precoParaOferta(a.titulo, a.valor, a.nota)),
  ].filter(Boolean),
};

/** Só para /precario — inclui OfferCatalog além dos schemas base. */
export const schemaScriptsPrecario = [
  ...schemaScripts,
  { type: "application/ld+json", children: JSON.stringify(precarioOfferSchema) },
];
