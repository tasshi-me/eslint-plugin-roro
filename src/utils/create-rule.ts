import { ESLintUtils } from "@typescript-eslint/utils";
const { RuleCreator: ruleCreator } = ESLintUtils;

export const createRule = ruleCreator(
  (name) => `https://github.com/tasshi-me/eslint-plugin-roro/#${name}`,
);
