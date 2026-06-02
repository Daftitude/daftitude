const fs = require("fs");

const file = "src/styles/pages.css";
let src = fs.readFileSync(file, "utf8");

const replacements = [
  ["\n.pkg-card {\n  position: relative;", "\n.packages .pkg-card {\n  position: relative;"],

  ["\n.btn-ghost {\n  border: 1px solid rgba(255, 255, 255, 0.12);", "\n.modal-foot .btn-ghost {\n  border: 1px solid rgba(255, 255, 255, 0.12);"],
  ["\n.btn-solid {\n  border: 1px solid rgba(12, 199, 246, 0.42);", "\n.modal-foot .btn-solid {\n  border: 1px solid rgba(12, 199, 246, 0.42);"],

  ["\n.service-details-btn {\n  border: 1px solid rgba(255, 255, 255, 0.12);", "\n.service-actions .service-details-btn {\n  border: 1px solid rgba(255, 255, 255, 0.12);"],
  ["\n.service-select-btn {\n  border: 1px solid rgba(125, 255, 178, 0.34);", "\n.service-actions .service-select-btn {\n  border: 1px solid rgba(125, 255, 178, 0.34);"],

  ["\n.about-me-section,\n.journey-section,\n.mission-section,\n.values-container {\n  padding:", "\n.about-page .about-me-section,\n.about-page .journey-section,\n.about-page .mission-section,\n.about-page .values-container {\n  padding:"],
  ["\n.section-container {\n  display: grid;", "\n.about-page .section-container {\n  display: grid;"],
  ["\n.contact-container {\n  display: grid;", "\n.contact-page .contact-container {\n  display: grid;"],

  ["\n.balance-grid {\n  grid-template-columns:", "\n.crypto-section .balance-grid {\n  grid-template-columns:"],
  ["\n.price-grid {\n  grid-template-columns:", "\n.crypto-section .price-grid {\n  grid-template-columns:"],
  ["\n.token-balance-card {\n  display: grid;", "\n.crypto-section .token-balance-card {\n  display: grid;"],
  ["\n.tx-table th {\n  color:", "\n.crypto-section .tx-table th {\n  color:"],
];

let changed = 0;

for (const [from, to] of replacements) {
  if (src.includes(from)) {
    src = src.replace(from, to);
    changed++;
  } else {
    console.log("MISS:", from.split("\n").filter(Boolean)[0]);
  }
}

fs.writeFileSync(file, src);
console.log("Scoped duplicate selector replacements:", changed);
