const fs = require("fs");

const file = "scripts/css-audit.cjs";
let src = fs.readFileSync(file, "utf8");

src = src.replace(
`  const stringClassRegex = /["'\`]([a-zA-Z_-][a-zA-Z0-9_-]*(?:\\s+[a-zA-Z_-][a-zA-Z0-9_-]*)*)["'\`]/g;
  let match;

  while ((match = stringClassRegex.exec(codeText))) {
    const raw = match[1];

    if (!raw.includes("-")) continue;

    raw
      .split(/\\s+/)
      .map((item) => item.trim())
      .filter(Boolean)
      .filter((item) => item.includes("-"))
      .filter(isLikelyRealClassName)
      .forEach((item) => classes.add(item));
  }

`,
`  // Do not scan arbitrary quoted strings as class names.
  // That produced false positives from data labels like "Smart-home",
  // object keys, content strings, and Tailwind utilities outside className.
  // Keep this audit focused on explicit className usage.

`
);

fs.writeFileSync(file, src);
console.log("Disabled arbitrary string literal class extraction");
