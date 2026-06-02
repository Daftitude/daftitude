const fs = require("fs");

const report = fs.readFileSync("css-audit-report.md", "utf8");
const lines = report.split(/\r?\n/);

const start = lines.findIndex((line) => line.trim() === "## Duplicate Selectors");
const end = lines.findIndex((line, index) => index > start && line.startsWith("## "));

if (start === -1) {
  throw new Error("Duplicate Selectors section not found.");
}

const section = lines.slice(start, end === -1 ? lines.length : end);
const owner = new Map();

for (const line of section) {
  if (!line.startsWith("- `")) continue;

  const tail = line.split(" times: ")[1] || "";
  const matches = [...tail.matchAll(/`(src\/styles\/[^`]+\.css):\d+`/g)];
  const files = matches.map((match) => match[1]);
  const uniqueFiles = [...new Set(files)];

  for (const file of files) {
    const item = owner.get(file) || { entries: 0, groups: 0 };
    item.entries++;
    owner.set(file, item);
  }

  for (const file of uniqueFiles) {
    const item = owner.get(file);
    item.groups++;
    owner.set(file, item);
  }
}

console.log("## Top Duplicate Selector Owners\n");

[...owner.entries()]
  .sort((a, b) => {
    return (
      b[1].entries - a[1].entries ||
      b[1].groups - a[1].groups ||
      a[0].localeCompare(b[0])
    );
  })
  .slice(0, 30)
  .forEach(([file, item]) => {
    console.log(
      `- ${file} — ${item.entries} duplicate entries across ${item.groups} groups`
    );
  });
