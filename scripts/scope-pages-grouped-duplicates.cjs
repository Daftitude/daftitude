const fs = require("fs");

const file = "src/styles/pages.css";
let src = fs.readFileSync(file, "utf8");

const replacements = [
  [
`.btn-ghost,
.btn-solid {`,
`.modal-foot .btn-ghost,
.modal-foot .btn-solid {`
  ],
  [
`.service-details-btn,
.service-select-btn {`,
`.service-actions .service-details-btn,
.service-actions .service-select-btn {`
  ],
  [
`.section-container,
.about-me-section,
.journey-section,
.mission-section,
.values-container,
.contact-container {`,
`.about-page .section-container,
.about-page .about-me-section,
.about-page .journey-section,
.about-page .mission-section,
.about-page .values-container,
.contact-page .contact-container {`
  ],
  [
`.balance-grid,
.price-grid {`,
`.crypto-section .balance-grid,
.crypto-section .price-grid {`
  ],
  [
`.token-balance-card,
.price-card,
.crypto-section .card {`,
`.crypto-section .token-balance-card,
.crypto-section .price-card,
.crypto-section .card {`
  ],
  [
`.tx-table th,
.tx-table td {`,
`.crypto-section .tx-table th,
.crypto-section .tx-table td {`
  ],
];

let changed = 0;

for (const [from, to] of replacements) {
  if (src.includes(from)) {
    src = src.replace(from, to);
    changed++;
  } else {
    console.log("MISS:", from.split("\n")[0]);
  }
}

fs.writeFileSync(file, src);
console.log("Scoped grouped duplicate selectors:", changed);
