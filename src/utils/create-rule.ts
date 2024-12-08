import { ESLintUtils } from "@typescript-eslint/utils";
const { RuleCreator: ruleCreator } = ESLintUtils;

export const createRule = ruleCreator(
  (name) => `https://example.com/rule/${name}`,
);
