import js from "@eslint/js";
import { jsdoc } from "eslint-plugin-jsdoc";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist"]),
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  jsdoc({ config: "flat/recommended-tsdoc-error" }),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
);
