const { promises: fsp } = require("fs");
const path = require("path");

// function rename() {
//   fsp.rename("publish", "11ty-vite-output");
// }

async function runBuild() {
  await fsp.mkdir(".11ty-vite", { recursive: true });
  await fsp.rename("publish", ".11ty-vite");
}

runBuild();
