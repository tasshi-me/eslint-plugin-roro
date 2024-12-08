import { rule as receiveObject } from "./receive-object.js";
import { rule as returnObject } from "./return-object.js";
import { Rule } from "eslint";

export const rules = {
  "receive-object": receiveObject as unknown as Rule.RuleModule,
  "return-object": returnObject as unknown as Rule.RuleModule,
};
