/**
 * Dados estruturados schema.org — Organization e LocalBusiness.
 * Baseados exclusivamente nos dados confirmados em src/data/legal.ts e src/data/site.ts.
 */
import { contacto } from "@/data/site";
import { legal } from "@/data/legal";

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

/** Entradas prontas para o campo `scripts` do head() das rotas. */
export const schemaScripts = [
  { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
  { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
];
