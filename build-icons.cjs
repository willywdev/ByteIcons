const fs = require("fs");
const path = require("path");

// Load SVGs
const iconsDirectory = path.resolve(__dirname, "./icons");

const svgData = fs
  .readdirSync(iconsDirectory)
  .filter((file) => file.endsWith(".svg"))
  .map((fileName) => {
    const filePath = path.join(iconsDirectory, fileName);
    return fs.readFileSync(filePath, "utf-8");
  });

// Combine SVGs
const combinedSvg = `<svg>${svgData.join("")}</svg>`;

// Write the combined SVG to a file
fs.writeFileSync(
  path.resolve(__dirname, "./public/combined-icons.svg"),
  combinedSvg
);
