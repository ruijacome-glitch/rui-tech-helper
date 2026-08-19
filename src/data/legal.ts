/**
 * CONFIGURAÇÃO LEGAL CENTRAL — "O Rui dos Computadores"
 *
 * Fonte única de verdade para os dados usados nas páginas
 * /termos-legais, /privacidade e /cookies.
 *
 * REGRA: não inventar informação. Os campos por preencher ficam vazios ("")
 * e o site mostra discretamente "A preencher antes da publicação".
 *
 * Preencher antes de publicar: nomeLegal, nif, emailPrivacidade,
 * entidadeRal e entidadeRalUrl.
 */

import { contacto } from "./site";

/** Texto mostrado quando um campo legal ainda está vazio. */
export const PENDENTE = "A preencher antes da publicação";

export const legal = {
  /** Nome comercial usado publicamente no site. */
  nomeComercial: "O Rui dos Computadores",

  /** Nome legal / denominação social do prestador. */
  nomeLegal: "Rui Jácome" as string,

  /** Número de identificação fiscal. */
  nif: "231834322" as string,

  /** Email para assuntos de privacidade e exercício de direitos. */
  emailPrivacidade: contacto.email as string,

  /** Telefone — reutiliza a configuração de contacto do site. */
  telefone: contacto.telefone,

  /** Entidade de Resolução Alternativa de Litígios (RAL). Não inventar adesão. */
  entidadeRal: "" as string,
  entidadeRalUrl: "" as string,

  /** Data da última actualização dos documentos legais. */
  dataActualizacao: "18 de Agosto de 2026",

  /**
   * Prazo indicativo de conservação dos pedidos de contacto.
   * Alterar aqui reflecte-se em /privacidade e /termos-legais.
   */
  prazoPedidosContacto:
    "12 meses após a última interacção, salvo relação contratual ou obrigação legal",
} as const;

/** Ligações oficiais usadas nos documentos legais. */
export const ligacoesOficiais = {
  livroReclamacoes: "https://www.livroreclamacoes.pt/Inicio/",
  cnpd: "https://www.cnpd.pt/",
  rgpd: "https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679",
  cookiesUe: "https://commission.europa.eu/cookies-policy_pt",
  lei41_2004: "https://diariodarepublica.pt/dr/detalhe/lei/41-2004-480710",
} as const;

/** Devolve o valor ou o marcador de campo pendente. */
export function valorOuPendente(valor: string): { texto: string; pendente: boolean } {
  const limpo = (valor ?? "").trim();
  return limpo ? { texto: limpo, pendente: false } : { texto: PENDENTE, pendente: true };
}
