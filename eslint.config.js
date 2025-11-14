import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react,
    },
    extends: [js.configs.recommended, react.configs.flat.recommended],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  },
  pluginReact.configs.flat.recommended,
]);
