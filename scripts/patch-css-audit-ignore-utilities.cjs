const fs = require("fs");

const files = [
  "scripts/css-audit.cjs",
  "scripts/css-audit-main-site.cjs",
];

const helper = `
function isUtilityClass(className) {
  return (
    /^(absolute|relative|fixed|static|sticky)$/.test(className) ||
    /^(block|inline-block|inline-flex|flex|grid|hidden)$/.test(className) ||
    /^(items|justify|content|self)-/.test(className) ||
    /^(gap|space|p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-/.test(className) ||
    /^(w|h|min-w|min-h|max-w|max-h)-/.test(className) ||
    /^(top|right|bottom|left|inset|z)-/.test(className) ||
    /^(bg|text|border|rounded|shadow|opacity)-/.test(className) ||
    /^(font|leading|tracking)-/.test(className) ||
    /^(list|overflow|object|cursor|select|pointer)-/.test(className) ||
    /^(transition|duration|ease|animate|backdrop|blur)-/.test(className) ||
    /^(from|to|via)-/.test(className) ||
    /^(hover|focus|active|disabled|sm|md|lg|xl|2xl):/.test(className) ||
    className === "group"
  );
}

`;

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");

  if (!src.includes("function isUtilityClass")) {
    src = src.replace("const classesMissingCss =", helper + "const classesMissingCss =");
  }

  src = src.replace(
    `.filter((className) => !cssClassMap.has(className))
  .sort();`,
    `.filter((className) => !cssClassMap.has(className))
  .filter((className) => !isUtilityClass(className))
  .sort();`
  );

  fs.writeFileSync(file, src);
  console.log("Patched utility-class missing-CSS filter in " + file);
}
