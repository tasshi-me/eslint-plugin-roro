import { ESLintUtils } from "@typescript-eslint/utils";
const { RuleCreator: ruleCreator } = ESLintUtils;

export interface PluginDocs {
  description: string;
  recommended: boolean;
  requiresTypeChecking: boolean;
}

export const createRule = ruleCreator<PluginDocs>(
  (name) =>
    `https://github.com/tasshi-me/eslint-plugin-roro/tree/main/eslint-plugin-example-typed-linting/docs/${name}.md`,
);
