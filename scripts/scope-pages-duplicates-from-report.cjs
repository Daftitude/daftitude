const fs = require("fs");

const file = "src/styles/pages.css";
let lines = fs.readFileSync(file, "utf8").split(/\r?\n/);

const scopeMap = new Map([
  [".pkg-card", ".packages .pkg-card"],
  [".btn-ghost", ".modal-foot .btn-ghost"],
  [".btn-solid", ".modal-foot .btn-solid"],
  [".service-details-btn", ".service-actions .service-details-btn"],
  [".service-select-btn", ".service-actions .service-select-btn"],
  [".section-container", ".about-page .section-container"],
  [".about-me-section", ".about-page .about-me-section"],
  [".journey-section", ".about-page .journey-section"],
  [".mission-section", ".about-page .mission-section"],
  [".values-container", ".about-page .values-container"],
  [".contact-container", ".contact-page .contact-container"],
  [".balance-grid", ".crypto-section .balance-grid"],
  [".price-grid", ".crypto-section .price-grid"],
  [".token-balance-card", ".crypto-section .token-balance-card"],
  [".tx-table th", ".crypto-section .tx-table th"],
]);

let changed = 0;

for (const [selector, scoped] of scopeMap.entries()) {
  const regex = new RegExp("^\\s*" + selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\{\\s*$");
  const hits = [];

  lines.forEach((line, index) => {
    if (regex.test(line)) hits.push(index);
  });

  if (hits.length < 2) {
    console.log("SKIP", selector, "hits:", hits.map((i) => i + 1).join(", ") || "none");
    continue;
  }

  const targetIndex = hits[hits.length - 1];
  console.log("SCOPE", selector, "line", targetIndex + 1, "->", scoped);
  lines[targetIndex] = lines[targetIndex].replace(selector, scoped);
  changed++;
}

fs.writeFileSync(file, lines.join("\n"));
console.log("Scoped duplicate detail selectors:", changed);
