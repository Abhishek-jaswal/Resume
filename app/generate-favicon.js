/**
 * generate-favicon.js
 *
 * Run this ONCE in your project root to create favicon.ico
 * from your profile photo:
 *
 *   npm install sharp --save-dev
 *   node generate-favicon.js
 *
 * Then place the output favicon.ico in /public/
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT  = path.join(__dirname, "public", "abhishekk.jpeg");
const OUTPUT = path.join(__dirname, "public", "favicon.ico");

async function generate() {
  if (!fs.existsSync(INPUT)) {
    console.error("❌ Could not find public/abhishekk.jpeg");
    process.exit(1);
  }

  // Generate a 32×32 PNG (standard favicon size) then rename to .ico
  // Most modern browsers accept a 32×32 JPEG/PNG named favicon.ico
  await sharp(INPUT)
    .resize(32, 32, { fit: "cover", position: "top" })
    .png()
    .toFile(OUTPUT.replace(".ico", "-32.png"));

  // Also generate a 180×180 apple-touch-icon
  await sharp(INPUT)
    .resize(180, 180, { fit: "cover", position: "top" })
    .jpeg({ quality: 90 })
    .toFile(path.join(__dirname, "public", "apple-touch-icon.jpg"));

  console.log("✅ Generated:");
  console.log("   public/favicon-32.png   → rename/copy to favicon.ico if needed");
  console.log("   public/apple-touch-icon.jpg");

  // Tip: for true .ico multi-size support use the `ico-endec` or `png-to-ico` package
  // npm install png-to-ico --save-dev
  // const pngToIco = require("png-to-ico");
  // const icoBuffer = await pngToIco([OUTPUT.replace(".ico", "-32.png")]);
  // fs.writeFileSync(OUTPUT, icoBuffer);
}

generate().catch(console.error);
