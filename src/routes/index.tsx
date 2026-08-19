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
  "Assistência informática em Cascais, ao domicílio e remota. Reparação, optimização, recuperação de dados e redes Wi-Fi, sem conversa técnica.";

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
    <>
      <Header />
      <main>
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
    </>
  );
}
