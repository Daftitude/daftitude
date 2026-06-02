const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");
const STYLES_DIR = path.join(SRC_DIR, "styles");
const REPORT_PATH = path.join(ROOT, "css-audit-report.md");

const STYLE_EXTENSIONS = new Set([".css"]);
const CODE_EXTENSIONS = new Set([".jsx", ".js", ".tsx", ".ts"]);

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

  ".story-card span",
  ".story-specialties strong",
  ".story-specialties li",
  ".system-chip",
  ".chip",
  ".panel-buzz-row span",
]);

const IGNORE_DIRS = new Set([
  "node_modules",
  "dist",
  "build",
  ".git",
  ".vite",
]);

function walk(dir, extensions, results = []) {
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, extensions, results);
      continue;
    }

    if (extensions.has(path.extname(entry.name))) {
      results.push(fullPath);
    }
  }

  return results;
}

function rel(filePath) {
  return path.relative(ROOT, filePath).replaceAll("\\", "/");
}

function stripCssComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
}

function lineFromIndex(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

function extractSelectors(cssText) {
  const cleaned = stripCssComments(cssText);
  const selectors = [];

  let buffer = "";
  let selectorStart = 0;
  let depth = 0;

  for (let i = 0; i < cleaned.length; i++) {
    const ch = cleaned[i];

    if (ch === "{") {
      const raw = buffer.trim();

      if (depth === 0 && raw && !raw.startsWith("@")) {
        raw
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .forEach((selector) => {
            selectors.push({
              selector: selector.replace(/\s+/g, " ").trim(),
              line: lineFromIndex(cleaned, selectorStart),
            });
          });
      }

      depth++;
      buffer = "";
      selectorStart = i + 1;
      continue;
    }

    if (ch === "}") {
      depth = Math.max(0, depth - 1);
      buffer = "";
      selectorStart = i + 1;
      continue;
    }

    if (depth === 0) {
      if (!buffer.trim()) selectorStart = i;
      buffer += ch;
    }
  }

  return selectors;
}

function extractClassesFromSelector(selector) {
  const classes = [];
  const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g;
  let match;

  while ((match = classRegex.exec(selector))) {
    classes.push(match[1]);
  }

  return classes;
}

function isLikelyRealClassName(className) {
  if (!className) return false;

  if (className.startsWith(".")) return false;
  if (/^[0-9]+$/.test(className)) return false;
  if (/^[<>=!]+$/.test(className)) return false;
  if (/[{}"'\`]/.test(className)) return false;
  if (className.includes("===") || className.includes("<=") || className.includes(">=")) return false;

  if (/^[A-Z][a-z]+(?:-[A-Z][a-z]+)*$/.test(className)) return false;
  if (className === "Content-Type") return false;

  return /^[a-zA-Z_-][a-zA-Z0-9_:-]*$/.test(className);
}

function extractCodeClasses(codeText) {
  const classes = new Set();

  const classNameRegexes = [
    /className\s*=\s*"([^"]+)"/g,
    /className\s*=\s*'([^']+)'/g,
    /className\s*=\s*`([^`]+)`/g,
    /className\s*=\s*\{`([^`]+)`\}/g,
  ];

  for (const regex of classNameRegexes) {
    let match;
    while ((match = regex.exec(codeText))) {
      const raw = match[1];

      raw
        .split(/\s+/)
        .map((item) => item.trim())
        .filter(Boolean)
        .filter((item) => !item.includes("${"))
        .filter((item) => !item.includes("?"))
        .filter((item) => !item.includes(":"))
        .filter((item) => !item.includes("("))
        .filter((item) => !item.includes(")"))
        .filter(isLikelyRealClassName)
        .forEach((item) => classes.add(item));
    }
  }

  // Do not scan arbitrary quoted strings as class names.
  // That produced false positives from data labels like "Smart-home",
  // object keys, content strings, and Tailwind utilities outside className.
  // Keep this audit focused on explicit className usage.

  return classes;
}

function countImportant(cssText) {
  return (cssText.match(/!important/g) || []).length;
}

const cssFiles = walk(STYLES_DIR, STYLE_EXTENSIONS);
const codeFiles = walk(SRC_DIR, CODE_EXTENSIONS);

const selectorMap = new Map();
const cssClassMap = new Map();
const importantCounts = [];
const askDaftSelectorLocations = [];
const readingSelectorLocations = [];
const broadSelectorLocations = [];

for (const file of cssFiles) {
  const text = fs.readFileSync(file, "utf8");
  const selectors = extractSelectors(text);
  const importantCount = countImportant(text);

  importantCounts.push({
    file: rel(file),
    count: importantCount,
  });

  for (const item of selectors) {
    const selectorKey = item.selector;

    if (!selectorMap.has(selectorKey)) {
      selectorMap.set(selectorKey, []);
    }

    const location = {
      file: rel(file),
      line: item.line,
    };

    selectorMap.get(selectorKey).push(location);

    const classes = extractClassesFromSelector(selectorKey);

    for (const className of classes) {
      if (!cssClassMap.has(className)) {
        cssClassMap.set(className, []);
      }

      cssClassMap.get(className).push({
        selector: selectorKey,
        ...location,
      });
    }

    if (selectorKey.includes("askdaft")) {
      askDaftSelectorLocations.push({
        selector: selectorKey,
        ...location,
      });
    }

    if (
      selectorKey.includes("reading-impairment-mode") ||
      selectorKey.includes("reading-mode") ||
      selectorKey.includes("reading-") ||
      selectorKey.includes("pricing-emphasis")
    ) {
      readingSelectorLocations.push({
        selector: selectorKey,
        ...location,
      });
    }

    if (
      selectorKey === ".phase-btn" ||
      selectorKey.includes(".phase-btn") ||
      selectorKey === ".phase-section" ||
      selectorKey.includes(".phase-section") ||
      selectorKey === ".phase-section-heading" ||
      selectorKey.includes(".phase-section-heading") ||
      selectorKey === ".account-page" ||
      selectorKey.includes(".account-page") ||
      selectorKey === ".story-card" ||
      selectorKey.includes(".story-card")
    ) {
      broadSelectorLocations.push({
        selector: selectorKey,
        ...location,
      });
    }
  }
}

const codeClassMap = new Map();

for (const file of codeFiles) {
  const text = fs.readFileSync(file, "utf8");
  const classes = extractCodeClasses(text);

  for (const className of classes) {
    if (!codeClassMap.has(className)) {
      codeClassMap.set(className, []);
    }

    codeClassMap.get(className).push(rel(file));
  }
}

const duplicateSelectors = [...selectorMap.entries()]
  .filter(([, locations]) => locations.length > 1)
  .filter(([selector]) => !INTENTIONAL_DUPLICATE_SELECTORS.has(selector))
  .sort((a, b) => b[1].length - a[1].length);

const possiblyUnusedCssClasses = [...cssClassMap.keys()]
  .filter((className) => !codeClassMap.has(className))
  .sort();

const classesMissingCss = [...codeClassMap.keys()]
  .filter((className) => !cssClassMap.has(className))
  .sort();

const duplicateClassDefinitions = [...cssClassMap.entries()]
  .filter(([, locations]) => locations.length > 3)
  .sort((a, b) => b[1].length - a[1].length);

importantCounts.sort((a, b) => b.count - a.count);

function mdLocation(item) {
  return `\`${item.file}${item.line ? `:${item.line}` : ""}\``;
}

function section(title, body) {
  return `\n\n## ${title}\n\n${body || "_None found._"}\n`;
}

function listItems(items, mapper, limit = 80) {
  if (!items.length) return "";

  const sliced = items.slice(0, limit);
  const output = sliced.map(mapper).join("\n");

  if (items.length > limit) {
    return `${output}\n\n_Showing ${limit} of ${items.length} results._`;
  }

  return output;
}

let report = `# CSS Audit Report

Generated: ${new Date().toLocaleString()}

## Summary

| Metric | Count |
|---|---:|
| CSS files scanned | ${cssFiles.length} |
| Code files scanned | ${codeFiles.length} |
| Unique CSS selectors | ${selectorMap.size} |
| Unique CSS classes in CSS | ${cssClassMap.size} |
| Unique classes found in code | ${codeClassMap.size} |
| Duplicate selector groups | ${duplicateSelectors.length} |
| Classes defined in CSS but not found in code | ${possiblyUnusedCssClasses.length} |
| Classes found in code but missing CSS | ${classesMissingCss.length} |
| AskDaFT selector locations | ${askDaftSelectorLocations.length} |
| Reading/emphasis selector locations | ${readingSelectorLocations.length} |
`;

report += section(
  "Highest !important Counts by File",
  listItems(
    importantCounts.filter((item) => item.count > 0),
    (item) => `- \`${item.file}\` — **${item.count}**`
  )
);

report += section(
  "Duplicate Selectors",
  listItems(
    duplicateSelectors,
    ([selector, locations]) => {
      const locs = locations.map(mdLocation).join(", ");
      return `- \`${selector}\` — ${locations.length} times: ${locs}`;
    },
    120
  )
);

report += section(
  "Classes With Many CSS Definitions",
  listItems(
    duplicateClassDefinitions,
    ([className, locations]) => {
      const locs = locations.slice(0, 10).map(mdLocation).join(", ");
      const more = locations.length > 10 ? `, +${locations.length - 10} more` : "";
      return `- \`.${className}\` — ${locations.length} definitions: ${locs}${more}`;
    },
    120
  )
);

report += section(
  "AskDaFT Selector Locations",
  listItems(
    askDaftSelectorLocations,
    (item) => `- \`${item.selector}\` — ${mdLocation(item)}`,
    200
  )
);

report += section(
  "Reading Mode / Emphasis Selector Locations",
  listItems(
    readingSelectorLocations,
    (item) => `- \`${item.selector}\` — ${mdLocation(item)}`,
    200
  )
);

report += section(
  "Broad Shared Selectors That May Cause Leaks",
  listItems(
    broadSelectorLocations,
    (item) => `- \`${item.selector}\` — ${mdLocation(item)}`,
    160
  )
);

report += section(
  "Possibly Unused CSS Classes",
  listItems(
    possiblyUnusedCssClasses,
    (className) => {
      const locations = cssClassMap.get(className) || [];
      const loc = locations[0] ? mdLocation(locations[0]) : "";
      return `- \`.${className}\` ${loc}`;
    },
    250
  )
);

report += section(
  "Classes Used in Code but Missing CSS",
  listItems(
    classesMissingCss,
    (className) => {
      const files = [...new Set(codeClassMap.get(className) || [])].slice(0, 6).map((file) => `\`${file}\``).join(", ");
      return `- \`.${className}\` — ${files}`;
    },
    250
  )
);

report += `

## Cleanup Recommendation Order

1. Move AskDaFT front-door styles into a dedicated \`askdaft.css\`.
2. Move request-page styles into \`askdaft-request.css\`.
3. Move ticket styles into \`askdaft-tickets.css\`.
4. Move dashboard/device-board styles into \`askdaft-dashboard.css\`.
5. Centralize reading mode into \`reading-mode.css\`.
6. Remove duplicate selectors only after each moved file builds cleanly.
7. Delete possibly unused classes in small batches after visual testing.
`;

fs.writeFileSync(REPORT_PATH, report, "utf8");

console.log(`CSS audit complete.`);
console.log(`Report written to: ${REPORT_PATH}`);
console.log(`Duplicate selectors: ${duplicateSelectors.length}`);
console.log(`Possibly unused CSS classes: ${possiblyUnusedCssClasses.length}`);
console.log(`Classes missing CSS: ${classesMissingCss.length}`);
console.log(`AskDaFT selector locations: ${askDaftSelectorLocations.length}`);
console.log(`Reading/emphasis selector locations: ${readingSelectorLocations.length}`);
