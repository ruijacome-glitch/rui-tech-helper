/** Meta tags consistentes (canonical, OG, Twitter) para o head() de cada rota. */
import { SITE_URL } from "./schema";

export function buildPageHead(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
  image?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  const image = opts.image ?? `${SITE_URL}/og-image.jpg`;

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: opts.title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: opts.title },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
