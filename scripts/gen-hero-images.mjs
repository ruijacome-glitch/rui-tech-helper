import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");

const heroes = [
  "mascote-rui.png",
  "mascote-sobre-o-rui.png",
  "contactos-hero.png",
  "como-funciona-hero.png",
  "negocios-cenario.png",
  "servicos-hero.png",
  "precario-hero.png",
];

const widths = [400, 800];

for (const file of heroes) {
  const src = path.join(assetsDir, file);
  const base = file.replace(/\.png$/, "");
  for (const w of widths) {
    const webpOut = path.join(assetsDir, `${base}-${w}.webp`);
    const avifOut = path.join(assetsDir, `${base}-${w}.avif`);
    await sharp(src).resize({ width: w }).webp({ quality: 80 }).toFile(webpOut);
    await sharp(src).resize({ width: w }).avif({ quality: 55 }).toFile(avifOut);
    console.log(`${base}-${w}: webp+avif done`);
  }
}
console.log("all done");
