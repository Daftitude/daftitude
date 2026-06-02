const fs = require("fs");

const file = "scripts/css-audit.cjs";
const src = fs.readFileSync(file, "utf8");

if (src.includes("INTENTIONAL_DUPLICATE_SELECTORS")) {
  console.log("Ignore list already exists");
  process.exit(0);
}

const insert = `
const INTENTIONAL_DUPLICATE_SELECTORS = new Set([
  ".pricing-emphasis-red",
  ".pricing-emphasis-blue",
  ".footer",
  ".game-start-screen",
  ".game-path",
  ".game-path::before",
  ".game-path::after",
  ".game-center-panel",
  ".game-bottom-hint",
  ".final-start-section",
  ".final-start-section p",
  ".page-section",
  ".brand-word",
  ".brand-word-askdaft .brand-ask",
  ".brand-word-askdaft .brand-daft",
  ".brand-word-daftitude .brand-itude",
]);
`;

const marker = 'const CODE_EXTENSIONS = new Set([".jsx", ".js", ".tsx", ".ts"]);';
const idx = src.indexOf(marker);

if (idx === -1) {
  throw new Error("Could not find insert point");
}

const insertAt = src.indexOf("\n", idx) + 1;
fs.writeFileSync(file, src.slice(0, insertAt) + insert + src.slice(insertAt));

console.log("Inserted intentional duplicate selector allowlist");
