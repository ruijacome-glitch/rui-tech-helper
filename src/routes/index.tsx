import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/rui/Header";
import { Hero } from "@/components/rui/Hero";
import { SymptomTicker } from "@/components/rui/SymptomTicker";
import { Symptoms } from "@/components/rui/Symptoms";
import { Services } from "@/components/rui/Services";
import { HowItWorks } from "@/components/rui/HowItWorks";
import { WhyRui } from "@/components/rui/WhyRui";
import { Business } from "@/components/rui/Business";
import { Pricing } from "@/components/rui/Pricing";
import { FinalCta } from "@/components/rui/FinalCta";
import { Contact } from "@/components/rui/Contact";
import { Footer } from "@/components/rui/Footer";

const titulo = "O Rui dos Computadores | Assistência Informática em Cascais";
const descricao =
  "Assistência informática em Cascais, ao domicílio e remota: reparação, optimização, recuperação de dados, redes Wi-Fi e impressoras. Sem conversa técnica.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-night">
      <a
        href="#sintomas"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-orange focus:px-4 focus:py-2 focus:text-night"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main>
        {/* O <h1> da página vive no Hero. */}

        <Hero />
        <SymptomTicker />
        <Symptoms />
        <Services />
        <HowItWorks />
        <WhyRui />
        <Business />
        <Pricing />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
