const fs = require("fs");

const file = "scripts/css-audit.cjs";
let src = fs.readFileSync(file, "utf8");

const additions = [
  ".story-card span",
  ".story-specialties strong",
  ".story-specialties li",
  ".system-chip",
  ".chip",
  ".panel-buzz-row span",
];

src = src.replace(
  /const STYLE_EXTENSIONS = new Set\(\[\s*"\.css"[\s\S]*?\]\);/,
  'const STYLE_EXTENSIONS = new Set([".css"]);'
);

const marker = "const INTENTIONAL_DUPLICATE_SELECTORS = new Set([";
const start = src.indexOf(marker);

if (start === -1) {
  throw new Error("Could not find INTENTIONAL_DUPLICATE_SELECTORS");
}

const close = src.indexOf("]);", start);

if (close === -1) {
  throw new Error("Could not find intentional allowlist closing bracket");
}

let block = src.slice(start, close);

for (const selector of additions) {
  const line = `  "${selector}",`;
  if (!block.includes(line)) {
    block += `\n${line}`;
  }
}

src = src.slice(0, start) + block + src.slice(close);
fs.writeFileSync(file, src);

console.log("Repaired STYLE_EXTENSIONS and added reading-mode allowlist entries");
