import { ESLintUtils, TSESTree } from "@typescript-eslint/utils";
import { createRule } from "../utils/create-rule.js";
import { isObjectLikeKeyword, isObjectLikeType } from "../utils/typecheck.js";

type MessageIds = "shouldReturnObject";

const rule = createRule<[], MessageIds>({
  name: "return-object",
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce functions to return an object.",
    },
    messages: {
      shouldReturnObject: "Function must return an object",
    },
    schema: [],
  },
  defaultOptions: [],
  // TODO: add metadata
  create(context) {
    function checkFunctionReturnsObject(
      node:
        | TSESTree.ArrowFunctionExpression
        | TSESTree.FunctionDeclaration
        | TSESTree.FunctionExpression,
    ) {
      if (
        node.returnType &&
        !isObjectLikeKeyword(node.returnType.typeAnnotation)
      ) {
        context.report({ node: node, messageId: "shouldReturnObject" });
        return;
      }

      const parserServices = ESLintUtils.getParserServices(context);
      const type = parserServices.getTypeAtLocation(node);
      const returnType = type?.getCallSignatures()[0]?.getReturnType();
      if (!returnType) {
        return;
      }

      if (!isObjectLikeType(returnType)) {
        context.report({ node: node, messageId: "shouldReturnObject" });
      }
    }

    return {
      ArrowFunctionExpression: checkFunctionReturnsObject,
      FunctionDeclaration: checkFunctionReturnsObject,
      FunctionExpression: checkFunctionReturnsObject,
    };
  },
});

export default rule;
