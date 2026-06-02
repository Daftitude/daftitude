const fs = require("fs");

const file = "scripts/css-audit.cjs";
let lines = fs.readFileSync(file, "utf8").split(/\r?\n/);

let changed = 0;

lines = lines.flatMap((line) => {
  if (line.trim() === ".forEach((item) => classes.add(item));") {
    changed++;
    const indent = line.match(/^\s*/)[0];
    return [
      `${indent}.filter(isLikelyRealClassName)`,
      line,
    ];
  }

  return [line];
});

fs.writeFileSync(file, lines.join("\n"));
console.log("Attached sanitizer filters before class add paths: " + changed);
