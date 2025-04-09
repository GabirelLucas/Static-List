import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    plugins: { js, import: pluginImport }, 
    rules: {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "pathGroups": [
          {
            pattern: "@/**",
            group: "internal"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"],
        "alphabetize": { order: "asc", caseInsensitive: true },
        "newlines-between": "always"
      }
    ]
  }, extends: ["js/recommended", "prettier"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);