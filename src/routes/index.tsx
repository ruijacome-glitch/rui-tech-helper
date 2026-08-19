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
import { schemaScripts } from "@/lib/schema";

const BASE_URL = "https://rui-tech-helper.lovable.app";
const titulo = "O Rui dos Computadores | Assistência Informática em Cascais";
const descricao =
  "Assistência informática em Cascais, ao domicílio e remota. Reparação, optimização, recuperação de dados e redes Wi-Fi, sem conversa técnica.";
const ogImageUrl = `${BASE_URL}/og-image.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:url", content: BASE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "O Rui dos Computadores — Assistência Informática em Cascais" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: titulo },
      { name: "twitter:description", content: descricao },
      { name: "twitter:image", content: ogImageUrl },
      { name: "twitter:image:alt", content: "O Rui dos Computadores — Assistência Informática em Cascais" },
    ],
    links: [{ rel: "canonical", href: BASE_URL }],
    scripts: schemaScripts,
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
