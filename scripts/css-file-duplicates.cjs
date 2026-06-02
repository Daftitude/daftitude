const fs = require("fs");

const report = fs.readFileSync("css-audit-report.md", "utf8");
const targetFile = process.argv[2];

if (!targetFile) {
  throw new Error("Usage: node scripts/css-file-duplicates.cjs src/styles/cards.css");
}

const lines = report.split(/\r?\n/);
const start = lines.findIndex((line) => line.trim() === "## Duplicate Selectors");
const end = lines.findIndex((line, index) => index > start && line.startsWith("## "));
const section = lines.slice(start, end === -1 ? lines.length : end);

const hits = [];

for (const line of section) {
  if (!line.startsWith("- `")) continue;
  if (!line.includes(targetFile)) continue;
  hits.push(line);
}

console.log(`## Duplicate selectors touching ${targetFile}\n`);

if (!hits.length) {
  console.log("_None found._");
} else {
  hits.forEach((line) => console.log(line));
}
