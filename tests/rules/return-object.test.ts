import { RuleTester } from "@typescript-eslint/rule-tester";
import rule from "./../../src/rules/return-object.js";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      projectService: {
        allowDefaultProject: ["*.ts*"],
      },
      tsconfigRootDir: path.join(__dirname, "../", "../"),
    },
  },
});

ruleTester.run("return-object", rule, {
  valid: [
    // not functions
    "const x = 1;",

    // functions without return values
    "const fn = (): void => 1 as any;",
    "const fn = (): undefined => 1 as any;",
    "const fn = (): null => 1 as any;",

    // functions without return values (inferred)
    "const fn = ()=> {};",
    "const fn = ()=> undefined;",
    "const fn = ()=> null;",

    // return object
    "const fn = (): {value: number} => (1 as any);",
    "const fn = (): {value1: number, value2: number}=> (1 as any);",

    // return object (inferred)
    "const fn = ()=> ({value: 1});",
    "const fn = ()=> ({value1: 1, value2: 2});",

    // return object (Generics)
    "const fn = <T extends number>(): T => {}",
  ],
  invalid: [
    // Return Object
    {
      code: "const fn = ()=> 1;",
      // invalid tests must always specify the expected errors
      errors: [
        {
          messageId: "shouldReturnObject",
        },
      ],
    },
    {
      code: "const fn = ()=> 'foo';",
      // invalid tests must always specify the expected errors
      errors: [
        {
          messageId: "shouldReturnObject",
        },
      ],
    },

    // JSX
    {
      code: "const z = (input: string) => <div />;",
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      errors: [
        {
          messageId: "shouldReturnObject",
        },
      ],
    },
  ],
});
