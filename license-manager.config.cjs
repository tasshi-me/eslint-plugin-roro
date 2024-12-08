const { createConfig } = require("@cybozu/license-manager");

const config = createConfig({
  packageManager: "npm",
  analyze: {
    allowLicenses: [
      "MIT",
      "Apache-2.0",
      "(MIT OR Apache-2.0)",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "ISC",
      "0BSD",
      "Python-2.0",
      "MPL-2.0",
      "CC0-1.0",
      "CC-BY-3.0",
      // "CC-BY-4.0",
      "(MIT OR CC0-1.0)",
      "BlueOak-1.0.0",
      "Unlicense",
    ],
    allowPackages: [],
  },
});

module.exports = config;
