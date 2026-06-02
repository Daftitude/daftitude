const fs = require("fs");

const file = "src/styles/pages.css";
let lines = fs.readFileSync(file, "utf8").split(/\r?\n/);

const replacements = [
  [175, ".packages .pkg-card {"],
  [927, ".modal-foot .btn-ghost {"],
  [933, ".modal-foot .btn-solid {"],
  [1064, ".service-actions .service-details-btn {"],
  [1070, ".service-actions .service-select-btn {"],

  [1229, ".about-page .about-me-section,"],
  [1230, ".about-page .journey-section,"],
  [1231, ".about-page .mission-section,"],
  [1232, ".about-page .values-container {"],
  [1236, ".about-page .section-container {"],
  [1321, ".contact-page .contact-container {"],

  [1377, ".crypto-section .balance-grid {"],
  [1381, ".crypto-section .price-grid {"],
  [1398, ".crypto-section .token-balance-card {"],
  [1440, ".crypto-section .tx-table th {"],
];

for (const [lineNumber, replacement] of replacements) {
  const index = lineNumber - 1;
  if (!lines[index]) {
    throw new Error(`Line ${lineNumber} does not exist`);
  }

  console.log(`${lineNumber}: ${lines[index]} -> ${replacement}`);
  lines[index] = replacement;
}

fs.writeFileSync(file, lines.join("\n"));
console.log("Scoped duplicate detail selectors in pages.css");
