const fs = require("fs");

const file = "src/styles/pricing.css";
let css = fs.readFileSync(file, "utf8");

const replacements = [
  [
`.pricing-service strong,
.pricing-row > div:first-child strong {`,
`body .pricing-service strong,
body .pricing-row > div:first-child strong {`
  ],
  [
`.pricing-service span,
.pricing-row > div:first-child span {`,
`body .pricing-service span,
body .pricing-row > div:first-child span {`
  ],
  [
`.pricing-range,
.pricing-row > b:last-child {`,
`body .pricing-range,
body .pricing-row > b:last-child {`
  ],
];

let changed = 0;

for (const [from, to] of replacements) {
  if (!css.includes(from)) {
    console.log("Missing block:", JSON.stringify(from));
    continue;
  }

  css = css.replace(from, to);
  changed++;
}

if (changed !== replacements.length) {
  throw new Error(`Expected ${replacements.length} replacements, got ${changed}`);
}

fs.writeFileSync(file, css);
console.log(`Scoped pricing table detail blocks: ${changed}`);
