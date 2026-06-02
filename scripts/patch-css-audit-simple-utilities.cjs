const fs = require("fs");

const files = [
  "scripts/css-audit.cjs",
  "scripts/css-audit-main-site.cjs",
];

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");

  src = src.replace(
    `className === "border" ||`,
    `className === "border" ||
    className === "rounded" ||
    className === "shadow" ||
    className === "transition" ||
    className === "uppercase" ||`
  );

  fs.writeFileSync(file, src);
  console.log("Filtered simple utility classes in " + file);
}
