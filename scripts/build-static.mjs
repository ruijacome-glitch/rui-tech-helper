#!/usr/bin/env node
// Nitro's "static" preset has an upstream bug: after prerendering finishes
// (all static HTML already written to .output/public), it still tries to
// build a final, unneeded server bundle for the "nitro" Vite environment.
// That build crashes with "rolldownOptions.input should not be an html
// file when building for SSR" because the static preset's null entry
// falls back to index.html. Since this happens strictly after the real
// static output is complete, treat that specific failure as non-fatal —
// but only after verifying the expected output actually exists.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const KNOWN_BENIGN_ERROR =
  "rolldownOptions.input should not be an html file when building for SSR";

const REQUIRED_OUTPUT_FILES = [
  "index.html",
  "em-construcao/index.html",
  "contactos/index.html",
  "servicos/index.html",
];

const outputDir = join(process.cwd(), ".output", "public");

const result = spawnSync("npx", ["vite", "build"], {
  stdio: ["inherit", "pipe", "pipe"],
  encoding: "utf8",
  shell: true,
});

process.stdout.write(result.stdout ?? "");
process.stderr.write(result.stderr ?? "");

if (result.status === 0) {
  process.exit(0);
}

const combinedOutput = `${result.stdout ?? ""}${result.stderr ?? ""}`;
const isKnownBenignFailure = combinedOutput.includes(KNOWN_BENIGN_ERROR);

const missingFiles = REQUIRED_OUTPUT_FILES.filter(
  (relativePath) => !existsSync(join(outputDir, relativePath)),
);

if (isKnownBenignFailure && missingFiles.length === 0) {
  for (const relativePath of REQUIRED_OUTPUT_FILES) {
    const size = readFileSync(join(outputDir, relativePath), "utf8").length;
    if (size === 0) {
      console.error(`[build-static] ${relativePath} exists but is empty — treating as real failure.`);
      process.exit(1);
    }
  }
  console.log(
    "[build-static] Ignoring known-benign nitro post-prerender crash — all required static routes were written successfully.",
  );
  process.exit(0);
}

console.error(
  isKnownBenignFailure
    ? `[build-static] Prerender crash occurred but required output is missing: ${missingFiles.join(", ")}`
    : "[build-static] Build failed with an unrecognized error — not suppressing.",
);
process.exit(result.status ?? 1);
