const fs = require("fs");

const files = [
  "scripts/css-audit.cjs",
  "scripts/css-audit-main-site.cjs",
];

for (const file of files) {
  let src = fs.readFileSync(file, "utf8");

  src = src.replace(
    `className === "group"`,
    `className === "group" ||
    className === "border" ||
    /^(flex|grid)-/.test(className)`
  );

  fs.writeFileSync(file, src);
  console.log("Expanded utility-class ignore list in " + file);
}
