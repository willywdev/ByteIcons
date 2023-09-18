const fs = require("fs");
const path = require("path");
const iconsDir = path.join(__dirname, "./icons");
export const iconFiles = fs.readdirSync(iconsDir);
// ^-- iconFiles are now organized by their name in an JavaScript Array

const iconTable = iconFiles
  .filter((file) => file.endsWith(".svg"))
  .map((file) => path.basename(file, ".svg"))
  .map(
    (iconName) => `| ![${iconName}]("@icons/${iconName}.svg") | ${iconName} `
  )
  .join("\n");

const markdownContent = `
  # Available Icons
  
  | Icon Name | Usage |
  |-----------|-------|
  ${iconTable}
  `;

fs.writeFileSync("icons-list.md", markdownContent, "utf-8");
console.log("Icons list generated successfully!");
