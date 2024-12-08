import globals from "globals";
import presetsNodeTypescriptPrettier from "@cybozu/eslint-config/flat/presets/node-typescript-prettier.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: ["**/lib", "**/coverage"],
  },
  ...presetsNodeTypescriptPrettier,
  {
    files: ["**/*.{cjs,cts}"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
