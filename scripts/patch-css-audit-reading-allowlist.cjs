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

for (const selector of additions) {
  const line = `  "${selector}",`;
  if (src.includes(line)) continue;

  const anchor = "]);";
  const idx = src.indexOf(anchor);

  if (idx === -1) {
    throw new Error("Could not find allowlist closing bracket");
  }

  src = src.slice(0, idx) + `${line}\n` + src.slice(idx);
}

fs.writeFileSync(file, src);
console.log("Added reading-mode duplicate selectors to intentional allowlist");
