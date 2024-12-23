import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/utils";
import { createRule } from "../utils/create-rule.js";
import { isObjectLikeKeyword } from "../utils/typecheck.js";

type MessageIds = "shouldReceiveSingleObject";

export const rule = createRule<[], MessageIds>({
  name: "receive-object",
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce functions to receive only a single object.",
      recommended: true,
      requiresTypeChecking: true,
    },
    messages: {
      shouldReceiveSingleObject: "Function must receive only a single object",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    function checkFunctionReceivesObject(
      node:
        | TSESTree.ArrowFunctionExpression
        | TSESTree.FunctionDeclaration
        | TSESTree.FunctionExpression,
    ) {
      // Return if function has no parameters
      if (node.params.length === 0) {
        return;
      }

      // Check if function has only one parameter
      if (node.params.length > 1) {
        context.report({
          node: node,
          messageId: "shouldReceiveSingleObject",
        });
        return;
      }

      // Check if the first parameter is an object
      const firstParam = node.params.at(0);
      if (firstParam === undefined) {
        return;
      }
      const firstParamTypeAnnotation =
        firstParam.type === AST_NODE_TYPES.TSParameterProperty
          ? firstParam.parameter.typeAnnotation?.typeAnnotation
          : firstParam.typeAnnotation?.typeAnnotation;
      if (!firstParamTypeAnnotation) {
        return;
      }
      if (!isObjectLikeKeyword(firstParamTypeAnnotation)) {
        context.report({ node: node, messageId: "shouldReceiveSingleObject" });
      }

      // TODO: Forbit implicit any
    }

    return {
      ArrowFunctionExpression: checkFunctionReceivesObject,
      FunctionDeclaration: checkFunctionReceivesObject,
      FunctionExpression: checkFunctionReceivesObject,
    };
  },
});
