const { promises: fsp } = require("fs");
const path = require("path");

function rename() {
  fsp.rename("publish", "11ty-vite-output");
}

rename();
