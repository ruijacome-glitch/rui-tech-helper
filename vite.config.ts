// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // cPanel shared hosting has no Node/Workers runtime — prerender every
    // route to plain static HTML instead of the lovable-config SSR default.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  // Serve the prerendered output as static files, no server runtime.
  nitro: {
    preset: "static",
    // Nitro's static-preset crawler only discovers routes reachable via
    // <a> links from "/". /em-construcao has no inbound links, so it must
    // be seeded explicitly alongside "/" (an explicit `routes` list
    // replaces the default seed rather than merging with it).
    prerender: {
      crawlLinks: true,
      routes: ["/", "/em-construcao"],
    },
  },
});
