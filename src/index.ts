import { rules } from "./rules/index.js";
import module from "node:module";
import { ESLint, Linter } from "eslint";
const require = module.createRequire(import.meta.url);

const name = "eslint-plugin-roro";
const { version } =
  require("../package.json") as typeof import("../package.json");

const base = {
  meta: { name, version },
  rules,
};

const configs = {
  recommended: {
    files: ["**/*.{ts,cts,mts,jsx,tsx}"],
    plugins: {
      [name]: base,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      [`${name}/receive-object`]: "error",
      [`${name}/return-object`]: "error",
    } satisfies {
      [key in `${typeof name}/${keyof typeof rules}`]: Linter.StringSeverity;
    },
  },
} satisfies ESLint.Plugin["configs"];

const plugin = Object.assign(base, { configs }) satisfies ESLint.Plugin;
export default plugin;
