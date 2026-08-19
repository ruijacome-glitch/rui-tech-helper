#!/usr/bin/env node
// cPanel has no Node runtime, so the static build must happen here, locally
// or in CI, before pushing. This script builds the site, copies the
// prerendered output into a git-tracked `static-dist/` directory (not
// gitignored, unlike `.output/`), and — until "ponto 5" (SPA + real data
// migration) is reached — overwrites the deployed index.html with the
// /em-construcao page so the public site shows only the construction page,
// without touching any Lovable-owned route/component source.
import { spawnSync } from "node:child_process";
import { cpSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";

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
  copyFileSync(constructionPage, join(distDir, "index.html"));
  console.log("[prepare-deploy] CONSTRUCTION_MODE on — root index.html replaced with /em-construcao.");
} else {
  console.log("[prepare-deploy] CONSTRUCTION_MODE off — root index.html left as the real homepage.");
}

console.log(`[prepare-deploy] static-dist/ ready (${constructionOnly ? "construction-only" : "full site"}).`);
