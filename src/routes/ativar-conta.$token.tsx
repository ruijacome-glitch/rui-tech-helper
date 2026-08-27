import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/rui/PageShell";
import { AtivarContaForm } from "@/components/rui/AtivarContaForm";

const titulo = "Ativar conta | O Rui dos Computadores";
const descricao = "Ativa a tua conta de cliente para acompanhares as tuas intervenções.";

export const Route = createFileRoute("/ativar-conta/$token")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AtivarContaPage,
});

function AtivarContaPage() {
  const { token } = Route.useParams();

  return (
    <PageShell>
      <PageHero
        pagina="Ativar conta"
        etiqueta="// Área de cliente"
        titulo="Ativa a tua conta"
        intro="Confirma os teus dados e escolhe uma password para acederes ao acompanhamento das tuas intervenções."
      />
      <section className="mx-auto max-w-xl px-4 pb-20 sm:px-6">
        <AtivarContaForm token={token} />
      </section>
    </PageShell>
  );
}
