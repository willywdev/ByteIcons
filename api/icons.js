const fs = require("fs");
const path = require("path");

module.exports = async (req, res) => {
  const filePath = path.resolve(__dirname, "../public/combined-icons.svg");
  const fileStream = fs.createReadStream(filePath);

  res.writeHead(200, {
    "Content-Type": "image/svg+xml",
    "Content-Length": fs.statSync(filePath).size,
  });

  fileStream.pipe(res);
};
