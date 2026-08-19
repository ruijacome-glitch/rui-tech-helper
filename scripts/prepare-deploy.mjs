#!/usr/bin/env node
// cPanel has no Node runtime, so the static build must happen here, locally
// or in CI, before pushing. This script builds the site, copies the
// prerendered output into a git-tracked `static-dist/` directory (not
// gitignored, unlike `.output/`), and — until "ponto 5" (SPA + real data
// migration) is reached — overwrites the deployed index.html with the
// /em-construcao page so the public site shows only the construction page,
// without touching any Lovable-owned route/component source.
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The prerendered /em-construcao page ships the full TanStack Router client
// bundle so the app can hydrate into any other route. When that same HTML
// is reused as "/", the router hydrates against the *real* URL ("/"),
// matches the real Index route, and swaps the construction markup for the
// real homepage a moment after paint. Stripping the hydration script tags
// keeps the page pure static HTML — CSS-only animations still work.
function stripHydrationScripts(html) {
  return html
    .replace(/<link rel="modulepreload"[^>]*\/>/g, "")
    .replace(/<script>\(function\(a,f\)\{[\s\S]*?<\/script>/, "")
    .replace(/<script class="\$tsr"[\s\S]*?<\/script>/, "")
    .replace(/<script type="module" async="" src="[^"]*"><\/script>/, "");
}

const root = process.cwd();
const outputDir = join(root, ".output", "public");
const distDir = join(root, "static-dist");
const constructionOnly = process.env.CONSTRUCTION_MODE !== "false";

const build = spawnSync("npm", ["run", "build"], { stdio: "inherit", shell: true });
if (build.status !== 0) {
  console.error("[prepare-deploy] Build failed, aborting deploy prep.");
  process.exit(build.status ?? 1);
}

if (!existsSync(outputDir)) {
  console.error(`[prepare-deploy] Expected build output at ${outputDir}, not found.`);
  process.exit(1);
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outputDir, distDir, { recursive: true });

if (constructionOnly) {
  const constructionPage = join(distDir, "em-construcao", "index.html");
  if (!existsSync(constructionPage)) {
    console.error(`[prepare-deploy] CONSTRUCTION_MODE is on but ${constructionPage} is missing.`);
    process.exit(1);
  }
  const html = readFileSync(constructionPage, "utf8");
  writeFileSync(join(distDir, "index.html"), stripHydrationScripts(html));
  console.log("[prepare-deploy] CONSTRUCTION_MODE on — root index.html replaced with /em-construcao (static, no hydration JS).");
} else {
  console.log("[prepare-deploy] CONSTRUCTION_MODE off — root index.html left as the real homepage.");
}

console.log(`[prepare-deploy] static-dist/ ready (${constructionOnly ? "construction-only" : "full site"}).`);
