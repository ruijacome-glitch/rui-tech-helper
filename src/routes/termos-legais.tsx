import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LinhaLegal, type SeccaoLegal } from "@/components/rui/LegalPage";
import { legal, ligacoesOficiais, valorOuPendente } from "@/data/legal";
import { buildPageHead } from "@/lib/seo";
import { schemaScripts } from "@/lib/schema";

const titulo = "Termos Legais | O Rui dos Computadores";
const descricao =
  "Condições de utilização do site, pedidos de assistência, diagnóstico e orçamento, responsabilidades, reclamações e lei aplicável.";

export const Route = createFileRoute("/termos-legais")({
  head: () => ({
    ...buildPageHead({ title: titulo, description: descricao, path: "/termos-legais" }),
    scripts: schemaScripts,
  }),
  component: TermosPage,
});

function TermosPage() {
  const ral = valorOuPendente(legal.entidadeRal);
  const ralUrl = valorOuPendente(legal.entidadeRalUrl);

  const seccoes: SeccaoLegal[] = [
    {
      id: "identificacao",
      titulo: "Identificação do prestador",
      conteudo: (
        <dl className="mt-2">
          <LinhaLegal rotulo="Nome comercial" campo={valorOuPendente(legal.nomeComercial)} />
          <LinhaLegal rotulo="Nome legal" campo={valorOuPendente(legal.nomeLegal)} />
          <LinhaLegal rotulo="NIF" campo={valorOuPendente(legal.nif)} />
          <LinhaLegal rotulo="Telefone" campo={valorOuPendente(legal.telefone)} />
          <LinhaLegal rotulo="Email" campo={valorOuPendente(legal.emailPrivacidade)} />
        </dl>
      ),
    },
    {
      id: "objecto",
      titulo: "Objecto do site",
      conteudo: (
        <>
          <p>
            Este site apresenta serviços de assistência informática e permite iniciar um pedido de
            contacto através de um formulário.
          </p>
          <p>
            A utilização do formulário não celebra automaticamente um contrato nem garante
            disponibilidade. Qualquer serviço depende de contacto posterior e de acordo entre as
            partes.
          </p>
        </>
      ),
    },
    {
      id: "pedidos",
      titulo: "Pedidos, diagnóstico e orçamento",
      conteudo: (
        <>
          <p>
            Cada pedido é avaliado antes de qualquer intervenção. A solução proposta e o respectivo
            valor são confirmados contigo antes de começar o trabalho.
          </p>
          <p>
            Peças, materiais e deslocações podem ser cobrados quando aplicável, sempre após
            confirmação prévia. Os valores indicados em{" "}
            <Link to="/precario">Preçário</Link> são meramente indicativos enquanto surgirem como
            “Valor a confirmar” ou “Mediante avaliação”.
          </p>
        </>
      ),
    },
    {
      id: "recuperacao-dados",
      titulo: "Recuperação de dados",
      conteudo: (
        <p>
          Qualquer tentativa de recuperação de dados depende do estado físico e lógico do suporte e
          não pode ser garantida. Antes de avançar é feita uma avaliação e é explicado o que é
          possível tentar, bem como os respectivos limites e riscos.
        </p>
      ),
    },
    {
      id: "responsabilidades-cliente",
      titulo: "Responsabilidades do cliente",
      conteudo: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Fornecer informação correcta e suficiente sobre o problema e o equipamento.</li>
          <li>
            Garantir que tem autorização legítima sobre os equipamentos, contas e dados entregues.
          </li>
          <li>
            Efectuar cópias de segurança dos dados importantes sempre que tal seja possível antes da
            intervenção.
          </li>
        </ul>
      ),
    },
    {
      id: "responsabilidade",
      titulo: "Responsabilidade",
      conteudo: (
        <>
          <p>
            Nada nestes termos afasta ou limita os direitos imperativos que a lei reconhece aos
            consumidores.
          </p>
          <p>
            O site pode ter indisponibilidades temporárias por manutenção, actualização ou
            circunstâncias fora do controlo do prestador. Podem existir ligações para sites externos
            cujo conteúdo não é controlado por este site.
          </p>
          <p>
            A informação publicada tem carácter informativo e não substitui a avaliação concreta de
            cada caso.
          </p>
        </>
      ),
    },
    {
      id: "propriedade-intelectual",
      titulo: "Propriedade intelectual",
      conteudo: (
        <p>
          A marca, o logótipo, os textos, a mascote, as ilustrações e os componentes visuais deste
          site são protegidos por direitos de propriedade intelectual. Não podem ser copiados,
          reproduzidos ou adaptados sem autorização prévia e escrita.
        </p>
      ),
    },
    {
      id: "reclamacoes",
      titulo: "Reclamações e resolução de litígios",
      conteudo: (
        <>
          <p>
            Podes apresentar uma reclamação através do Livro de Reclamações Electrónico, em{" "}
            <a href={ligacoesOficiais.livroReclamacoes} target="_blank" rel="noreferrer noopener">
              livroreclamacoes.pt
            </a>
            .
          </p>
          <p>
            Entidade de resolução alternativa de litígios:{" "}
            <span className={ral.pendente ? "label-tech text-steel/80" : "text-foreground"}>
              {ral.texto}
            </span>
            {" — "}
            {ralUrl.pendente ? (
              <span className="label-tech text-steel/80">{ralUrl.texto}</span>
            ) : (
              <a href={legal.entidadeRalUrl} target="_blank" rel="noreferrer noopener">
                {legal.entidadeRalUrl}
              </a>
            )}
            .
          </p>
        </>
      ),
    },
    {
      id: "lei-aplicavel",
      titulo: "Lei aplicável",
      conteudo: (
        <p>
          Aplica-se a lei portuguesa. Esta escolha não retira ao consumidor a protecção conferida
          por disposições imperativas do direito português ou da União Europeia.
        </p>
      ),
    },
    {
      id: "alteracoes",
      titulo: "Alterações aos termos",
      conteudo: (
        <p>
          Estes termos podem ser actualizados sempre que existirem alterações aos serviços, ao site
          ou às obrigações legais aplicáveis. A versão em vigor é a publicada nesta página. Última
          actualização: {legal.dataActualizacao}.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      pagina="Termos legais"
      etiqueta="// Termos legais"
      titulo={
        <>
          Termos
          <br />
          legais.
        </>
      }
      intro="Condições de utilização do site e regras aplicáveis aos pedidos de assistência informática."
      seccoes={seccoes}
    />
  );
}
