import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LinhaLegal, type SeccaoLegal } from "@/components/rui/LegalPage";
import { legal, ligacoesOficiais, valorOuPendente } from "@/data/legal";

const titulo = "Política de Privacidade | O Rui dos Computadores";
const descricao =
  "Que dados são tratados, com que finalidade e fundamento, durante quanto tempo e quais os teus direitos ao abrigo do RGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  const seccoes: SeccaoLegal[] = [
    {
      id: "responsavel",
      titulo: "Responsável pelo tratamento",
      conteudo: (
        <dl className="mt-2">
          <LinhaLegal rotulo="Nome comercial" campo={valorOuPendente(legal.nomeComercial)} />
          <LinhaLegal rotulo="Nome legal" campo={valorOuPendente(legal.nomeLegal)} />
          <LinhaLegal rotulo="NIF" campo={valorOuPendente(legal.nif)} />
          <LinhaLegal
            rotulo="Email de privacidade"
            campo={valorOuPendente(legal.emailPrivacidade)}
          />
          <LinhaLegal rotulo="Telefone" campo={valorOuPendente(legal.telefone)} />
        </dl>
      ),
    },
    {
      id: "ambito",
      titulo: "Âmbito e dados tratados",
      conteudo: (
        <>
          <p>
            Esta política aplica-se ao site e aos pedidos de contacto feitos através dele. Consoante
            a situação, podem ser tratados os seguintes dados:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Nome e contacto (telefone ou email) e preferência de contacto.</li>
            <li>Tipo de problema, descrição do caso, localidade e período preferido.</li>
            <li>Comunicações posteriores relacionadas com o pedido ou com o serviço.</li>
            <li>Dados técnicos mínimos necessários à segurança e ao funcionamento do site.</li>
            <li>Preferências de cookies e tecnologias equivalentes.</li>
          </ul>
        </>
      ),
    },
    {
      id: "finalidades",
      titulo: "Finalidades e fundamentos de licitude",
      conteudo: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Responder a pedidos e adoptar diligências pré contratuais — artigo 6.º, n.º 1, alínea b)
            do RGPD.
          </li>
          <li>
            Prestar e administrar os serviços contratados — artigo 6.º, n.º 1, alínea b) do RGPD.
          </li>
          <li>
            Cumprir obrigações legais, nomeadamente fiscais e contabilísticas — artigo 6.º, n.º 1,
            alínea c) do RGPD.
          </li>
          <li>
            Proteger o site e prevenir utilização abusiva, com base no interesse legítimo — artigo
            6.º, n.º 1, alínea f) do RGPD.
          </li>
          <li>
            Tecnologias opcionais, apenas com consentimento — artigo 6.º, n.º 1, alínea a) do RGPD.
          </li>
        </ul>
      ),
    },
    {
      id: "formulario",
      titulo: "Como funciona o formulário neste momento",
      conteudo: (
        <>
          <p>
            O formulário de <Link to="/contactos">contacto</Link> funciona actualmente apenas no
            navegador. Os dados introduzidos não são enviados para um servidor nem guardados numa
            base de dados através do site.
          </p>
          <p>
            <strong>
              Esta política será actualizada quando o envio real do formulário for implementado
            </strong>
            , passando a indicar os destinatários, os prazos concretos e os prestadores técnicos
            envolvidos.
          </p>
        </>
      ),
    },
    {
      id: "prazos",
      titulo: "Prazos de conservação",
      conteudo: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Pedidos de contacto: {legal.prazoPedidosContacto}. Se derem origem a uma relação
            contratual, seguem os prazos aplicáveis a essa relação.
          </li>
          <li>
            Documentos contratuais e fiscais: durante os prazos legais de conservação aplicáveis.
          </li>
          <li>Preferências de cookies: seis meses.</li>
        </ul>
      ),
    },
    {
      id: "destinatarios",
      titulo: "Destinatários",
      conteudo: (
        <p>
          Os dados podem ser acedidos por prestadores técnicos estritamente necessários ao
          funcionamento do site e das comunicações, sujeitos a obrigações de confidencialidade e de
          tratamento apenas segundo instruções. Os dados não são vendidos nem cedidos para fins
          comerciais de terceiros.
        </p>
      ),
    },
    {
      id: "transferencias",
      titulo: "Transferências internacionais",
      conteudo: (
        <p>
          Caso venha a ser necessário transferir dados para fora do Espaço Económico Europeu, tal
          será feito apenas com um mecanismo legal adequado, como uma decisão de adequação ou
          cláusulas contratuais tipo. Esta política não afirma que existam transferências
          internacionais neste momento.
        </p>
      ),
    },
    {
      id: "direitos",
      titulo: "Os teus direitos",
      conteudo: (
        <>
          <p>Podes exercer, nos termos do RGPD, os direitos de:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Acesso aos dados e informação sobre o tratamento.</li>
            <li>Rectificação de dados incorrectos ou incompletos.</li>
            <li>Apagamento, quando aplicável.</li>
            <li>Limitação do tratamento.</li>
            <li>Portabilidade, quando aplicável.</li>
            <li>Oposição, nos tratamentos baseados em interesse legítimo.</li>
            <li>Retirada do consentimento, sem afectar a licitude do tratamento anterior.</li>
          </ul>
          <p>
            Para exercer estes direitos usa o email de privacidade indicado acima. Podes também
            apresentar reclamação à autoridade de controlo, a{" "}
            <a href={ligacoesOficiais.cnpd} target="_blank" rel="noreferrer noopener">
              CNPD
            </a>
            . O texto integral do RGPD está disponível no{" "}
            <a href={ligacoesOficiais.rgpd} target="_blank" rel="noreferrer noopener">
              EUR-Lex
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "seguranca",
      titulo: "Segurança, menores e decisões automatizadas",
      conteudo: (
        <>
          <p>
            São aplicadas medidas técnicas e organizativas adequadas para proteger os dados contra
            acesso, perda ou divulgação não autorizados.
          </p>
          <p>
            O site não se dirige a menores nem recolhe intencionalmente dados de menores sem
            intervenção dos titulares das responsabilidades parentais.
          </p>
          <p>
            Não são tomadas decisões exclusivamente automatizadas, incluindo definição de perfis,
            com efeitos jurídicos ou significativos.
          </p>
        </>
      ),
    },
    {
      id: "actualizacoes",
      titulo: "Actualizações desta política",
      conteudo: (
        <p>
          Esta política pode ser actualizada sempre que existirem alterações aos serviços, às
          tecnologias utilizadas ou às obrigações legais. Última actualização:{" "}
          {legal.dataActualizacao}. Consulta também a{" "}
          <Link to="/cookies">Política de cookies</Link>.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      pagina="Privacidade"
      etiqueta="// Privacidade"
      titulo={
        <>
          Política de
          <br />
          privacidade.
        </>
      }
      intro="Explicado de forma compreensível: que dados são tratados, porquê, durante quanto tempo e o que podes exigir."
      seccoes={seccoes}
    />
  );
}
