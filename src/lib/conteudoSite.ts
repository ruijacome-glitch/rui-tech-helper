/**
 * Fetch client-side do conteúdo configurável (backend rui-tech-helper-api).
 * Falha, timeout ou API em baixo -> usa silenciosamente os valores estáticos
 * de src/data/site.ts. Sem cache de browser nesta fase.
 */
import { useQuery } from "@tanstack/react-query";
import {
  contacto as contactoEstatico,
  testemunhoExemplo,
  precos as precosEstatico,
  precarioAreas as precarioAreasEstatico,
} from "@/data/site";

export type ContactoSite = { telefone: string; email: string; whatsapp: string };
export type TestemunhoSite = { citacao: string; atribuicao: string };
export type PrecoItem = { servico: string; valor: string; nota: string };
export type PrecarioAreaItem = { titulo: string; valor: string; nota: string };

export type ConteudoSite = {
  contacto: ContactoSite;
  testemunho: TestemunhoSite;
  precosHome: PrecoItem[];
  precarioAreas: PrecarioAreaItem[];
};

const API_URL = "https://api.oruidoscomputadores.pt/api/public/conteudo-site";
const TIMEOUT_MS = 3000;

export const conteudoSiteFallback: ConteudoSite = {
  contacto: {
    telefone: contactoEstatico.telefone,
    email: contactoEstatico.email,
    whatsapp: contactoEstatico.whatsapp,
  },
  testemunho: { ...testemunhoExemplo },
  precosHome: precosEstatico.map((p) => ({ servico: p.servico, valor: p.valor, nota: p.nota })),
  precarioAreas: precarioAreasEstatico.map((a) => ({
    titulo: a.titulo,
    valor: a.valor,
    nota: a.nota,
  })),
};

type ApiPrecoRow = { servico: string; valor: string; nota: string | null };
type ApiPrecarioAreaRow = { servico: string; valor: string; nota: string | null; titulo?: string };
type ApiResponse = {
  contacto?: Partial<ContactoSite>;
  testemunho?: Partial<TestemunhoSite>;
  precosHome?: ApiPrecoRow[];
  precarioAreas?: ApiPrecarioAreaRow[];
};

/** Busca o conteúdo configurável na API. Nunca rejeita — devolve sempre um ConteudoSite válido. */
export async function fetchConteudoSite(): Promise<ConteudoSite> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(API_URL, { signal: controller.signal });
    if (!res.ok) return conteudoSiteFallback;
    const data = (await res.json()) as ApiResponse;

    const contacto =
      data.contacto?.telefone && data.contacto?.email && data.contacto?.whatsapp
        ? {
            telefone: data.contacto.telefone,
            email: data.contacto.email,
            whatsapp: data.contacto.whatsapp,
          }
        : conteudoSiteFallback.contacto;

    const testemunho =
      data.testemunho?.citacao && data.testemunho?.atribuicao
        ? { citacao: data.testemunho.citacao, atribuicao: data.testemunho.atribuicao }
        : conteudoSiteFallback.testemunho;

    const precosHome =
      data.precosHome && data.precosHome.length > 0
        ? data.precosHome.map((p) => ({ servico: p.servico, valor: p.valor, nota: p.nota ?? "" }))
        : conteudoSiteFallback.precosHome;

    const precarioAreas =
      data.precarioAreas && data.precarioAreas.length > 0
        ? data.precarioAreas.map((a) => ({
            titulo: a.titulo ?? a.servico,
            valor: a.valor,
            nota: a.nota ?? "",
          }))
        : conteudoSiteFallback.precarioAreas;

    return { contacto, testemunho, precosHome, precarioAreas };
  } catch {
    return conteudoSiteFallback;
  } finally {
    clearTimeout(timeoutId);
  }
}

/** Hook partilhado — dedupe automático do fetch entre todos os componentes que o usam. */
export function useConteudoSite() {
  return useQuery({
    queryKey: ["conteudo-site"],
    queryFn: fetchConteudoSite,
    initialData: conteudoSiteFallback,
    staleTime: 0,
  });
}
