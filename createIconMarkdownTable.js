const fs = require("fs");
const path = require("path");
const iconsDir = path.join(__dirname, "./src/icons");
export const iconFiles = fs.readdirSync(iconsDir);

iconFiles.sort((a, b) => a.localeCompare(b));

const iconTable = iconFiles
  .filter((file) => file.endsWith(".svg"))
  .map((file) => path.basename(file, ".svg"))
  .map(
    (iconName) => `| ![${iconName}](./src/icons/${iconName}.svg) | ${iconName} `
  )
  .join("\n");

const markdownContent = `
  | Icon | Name |
  |-----------|-------|
  ${iconTable}
  `;

fs.writeFileSync("icons-list.md", markdownContent, "utf-8");
console.log("Icons list generated and sorted successfully!");
