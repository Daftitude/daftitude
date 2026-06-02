const fs = require("fs");

const file = "scripts/css-audit-main-site.cjs";
let src = fs.readFileSync(file, "utf8");

if (!src.includes("DAFT_FAMILY_APP_DIR")) {
  src = src.replace(
    'const STYLES_DIR = path.join(SRC_DIR, "styles");',
    'const STYLES_DIR = path.join(SRC_DIR, "styles");\nconst DAFT_FAMILY_APP_DIR = path.join(SRC_DIR, "pages", "family", "DaftFamApp");'
  );
}

src = src.replace(
  'const codeFiles = walk(SRC_DIR, CODE_EXTENSIONS);',
  'const codeFiles = walk(SRC_DIR, CODE_EXTENSIONS).filter((file) => !file.startsWith(DAFT_FAMILY_APP_DIR));'
);

src = src.replace(
  'const REPORT_PATH = path.join(ROOT, "css-audit-report.md");',
  'const REPORT_PATH = path.join(ROOT, "css-audit-main-site-report.md");'
);

fs.writeFileSync(file, src);
console.log("Created main-site CSS audit excluding DaftFamApp");
