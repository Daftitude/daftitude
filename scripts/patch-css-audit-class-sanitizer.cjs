const fs = require("fs");

const file = "scripts/css-audit.cjs";
let src = fs.readFileSync(file, "utf8");

const insertBefore = "function extractCodeClasses(codeText) {";

const sanitizer = `function isLikelyRealClassName(className) {
  if (!className) return false;

  if (className.startsWith(".")) return false;
  if (/^[0-9]+$/.test(className)) return false;
  if (/^[<>=!]+$/.test(className)) return false;
  if (/[{}"'\\\`]/.test(className)) return false;
  if (className.includes("===") || className.includes("<=") || className.includes(">=")) return false;

  if (/^[A-Z][a-z]+(?:-[A-Z][a-z]+)*$/.test(className)) return false;
  if (className === "Content-Type") return false;

  return /^[a-zA-Z_-][a-zA-Z0-9_:-]*$/.test(className);
}

`;

if (!src.includes("function isLikelyRealClassName")) {
  src = src.replace(insertBefore, sanitizer + insertBefore);
}

src = src.replace(
  `.filter((item) => !item.includes(")"))
        .forEach((item) => classes.add(item));`,
  `.filter((item) => !item.includes(")"))
        .filter(isLikelyRealClassName)
        .forEach((item) => classes.add(item));`
);

src = src.replace(
  `.filter((item) => item.includes("-"))
      .forEach((item) => classes.add(item));`,
  `.filter((item) => item.includes("-"))
      .filter(isLikelyRealClassName)
      .forEach((item) => classes.add(item));`
);

fs.writeFileSync(file, src);
console.log("Safely attached class-name sanitizer");
