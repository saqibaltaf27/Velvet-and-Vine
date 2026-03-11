// Smoke test verifies build output and ensures required assets exist

const fs = require("fs");

const requiredFiles = [
    "_site/assets/css/styles.css",
    "_site/index.html"
];

let failed = false;

requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {

        console.error("Missing critical asset: ", file);
        failed = true;
    }
});

if (failed) {

    console.error("Smoke test Failed.");
    process.exit(1);
}

console.log("Smoke Test Passed");