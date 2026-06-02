const fs = require("fs");

const file = "scripts/css-audit.cjs";
let lines = fs.readFileSync(file, "utf8").split(/\r?\n/);

lines = lines.flatMap((line) => {
  if (line.trim() === '".panel-buzz-row span",]);' || line.includes('".panel-buzz-row span",]);')) {
    return ['  ".panel-buzz-row span",', ']);'];
  }
  return [line];
});

fs.writeFileSync(file, lines.join("\n"));
console.log("Fixed css-audit allowlist closing bracket formatting");
