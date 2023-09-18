const fs = require("fs");
const path = require("path");
const iconsDir = path.join(__dirname, "./icons");
export const iconFiles = fs.readdirSync(iconsDir);
// ^-- iconFiles are now organized by their name in an JavaScript Array
