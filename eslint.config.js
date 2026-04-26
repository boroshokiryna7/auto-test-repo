import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      semi: "error",
      "no-console": "off",
      "no-unused-vars": "off"
    }
  }
]);
