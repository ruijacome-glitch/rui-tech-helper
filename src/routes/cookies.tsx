import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type SeccaoLegal } from "@/components/rui/LegalPage";
import { ligacoesOficiais } from "@/data/legal";
import { COOKIE_STORAGE_KEY } from "@/lib/cookie-consent";
import { abrirGestorCookies } from "@/lib/cookie-consent";
import { buildPageHead } from "@/lib/seo";
import { schemaScripts } from "@/lib/schema";

const titulo = "Política de Cookies | O Rui dos Computadores";
const descricao =
  "Que armazenamento o site usa, para que serve e como alterar as tuas preferências a qualquer momento. Sem cookies de análise, publicidade ou marketing.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    ...buildPageHead({ title: titulo, description: descricao, path: "/cookies" }),
    scripts: schemaScripts,
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const seccoes: SeccaoLegal[] = [
    {
      id: "o-que-sao",
      titulo: "O que são cookies e armazenamento local",
      conteudo: (
        <>
          <p>
            Cookies são pequenos ficheiros guardados pelo navegador quando visitas um site. Existem
            também outras formas de armazenamento no navegador, como o armazenamento local, que
            funcionam de maneira semelhante para guardar informação no teu equipamento.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Próprios</strong>: criados pelo próprio site que estás a visitar.
            </li>
            <li>
              <strong>De terceiros</strong>: criados por serviços externos incorporados numa página.
            </li>
            <li>
              <strong>De sessão</strong>: apagados quando fechas o navegador.
            </li>
            <li>
              <strong>Persistentes</strong>: mantêm-se durante um prazo definido.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "inventario",
      titulo: "Inventário actual",
      conteudo: (
        <>
          <p>Neste momento, o site utiliza apenas um registo, na categoria necessária:</p>
          <div className="mt-4 border border-electric/20 bg-night p-5">
            <p className="label-tech text-electric-soft">{COOKIE_STORAGE_KEY}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex flex-wrap gap-2">
                <dt className="label-tech text-steel">Tipo</dt>
                <dd>Armazenamento local próprio</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="label-tech text-steel">Categoria</dt>
                <dd>Necessária</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="label-tech text-steel">Finalidade</dt>
                <dd>Guardar a escolha de consentimento</dd>
              </div>
              <div className="flex flex-wrap gap-2">
                <dt className="label-tech text-steel">Prazo</dt>
                <dd>Seis meses</dd>
              </div>
            </dl>
          </div>
        </>
      ),
    },
    {
      id: "sem-analise",
      titulo: "Sem análise, publicidade ou marketing",
      conteudo: (
        <p>
          O site não utiliza actualmente cookies de análise, de publicidade ou de marketing, nem
          ferramentas de acompanhamento de terceiros. As categorias opcionais existem no painel de
          preferências apenas para registar a tua escolha e estão desligadas por defeito.
        </p>
      ),
    },
    {
      id: "futuro",
      titulo: "Tecnologias opcionais no futuro",
      conteudo: (
        <p>
          Se vier a ser necessário usar estatísticas de utilização ou outras tecnologias opcionais,
          só serão activadas depois do teu consentimento explícito. Esta política será actualizada
          com o inventário completo antes de qualquer activação.
        </p>
      ),
    },
    {
      id: "alterar",
      titulo: "Como alterar as tuas preferências",
      conteudo: (
        <>
          <p>
            Podes alterar ou retirar o consentimento a qualquer momento, com a mesma facilidade com
            que o deste:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Neste site, através do botão “Gerir cookies”, disponível no rodapé de todas as
              páginas.
            </li>
            <li>
              No navegador, nas definições de privacidade, onde podes bloquear ou apagar cookies e
              dados de sites.
            </li>
          </ul>
          <p>
            <button
              type="button"
              onClick={abrirGestorCookies}
              className="mt-2 inline-flex min-h-11 items-center rounded-sm border border-electric px-5 text-sm font-semibold text-foreground transition-colors hover:bg-electric/20"
            >
              Gerir cookies agora
            </button>
          </p>
        </>
      ),
    },
    {
      id: "referencias",
      titulo: "Referências oficiais",
      conteudo: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a href={ligacoesOficiais.cookiesUe} target="_blank" rel="noreferrer noopener">
              Política de cookies da Comissão Europeia
            </a>
          </li>
          <li>
            <a href={ligacoesOficiais.lei41_2004} target="_blank" rel="noreferrer noopener">
              Lei n.º 41/2004, de 18 de Agosto
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <LegalPage
      pagina="Cookies"
      etiqueta="// Cookies"
      titulo={
        <>
          Política
          <br />
          de cookies.
        </>
      }
      intro="Linguagem simples: o que fica guardado no teu equipamento, porquê e durante quanto tempo."
      seccoes={seccoes}
    />
  );
}
