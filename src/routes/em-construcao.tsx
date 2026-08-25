import { createFileRoute } from "@tanstack/react-router";
import { ConstructionPage } from "@/components/rui/ConstructionPage";

const titulo = "Em construção | O Rui dos Computadores";
const descricao =
  "O novo site da O Rui dos Computadores está a chegar. Assistência informática em Cascais, ao domicílio e remota.";

export const Route = createFileRoute("/em-construcao")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConstructionPage,
});
