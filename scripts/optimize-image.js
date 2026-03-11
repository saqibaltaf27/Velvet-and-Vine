// Image Optimization Script
// Compresses large images automatically before build

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "src/assets/images";

async function optimize() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        
        const filePath = path.join(inputDir, file);

        const optimizedPath = path.join(inputDir, file);

        await sharp(filePath)
        .resize(1920)
        .jpeg({ quality: 70 })
        .toFile(optimizedPath + "-temp");

        fs.renameSync(optimizedPath + "-temp", filePath);

        console.log("Optimized: ", file);
    }
}

optimize();