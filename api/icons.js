const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const icons = req.query.icons.split(","); // Parse the icons from the URL query parameters

  const svgData = await Promise.all(
    icons.map(async (iconName) => {
      const filePath = path.resolve(__dirname, `../icons/${iconName}.svg`);
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      return fileContent;
    })
  );

  const combinedSvg = `<svg>${svgData.join("")}</svg>`;

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(combinedSvg);
};
