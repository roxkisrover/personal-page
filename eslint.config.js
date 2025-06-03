import js from "@eslint/js";
import pluginImportX from "eslint-plugin-import-x";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginSonarjs from "eslint-plugin-sonarjs";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["build", "src/types/api/*.ts"] },
  {
    extends: [
      js.configs.recommended,
      pluginImportX.flatConfigs.recommended,
      pluginImportX.flatConfigs.typescript,
      tseslint.configs.strict,
      tseslint.configs.stylistic,
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
      pluginReactHooks.configs["recommended-latest"],
      pluginSonarjs.configs.recommended,
      pluginPrettierRecommended,
    ],
    files: ["**/*.{js,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "react-refresh": pluginReactRefresh,
      "simple-import-sort": pluginSimpleImportSort,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/consistent-type-imports": ["warn", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/max-params": ["error", { max: 4 }],
      "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true, argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-invalid-void-type": "off",
      "import-x/first": "warn",
      "import-x/newline-after-import": "warn",
      "import-x/consistent-type-specifier-style": ["warn", "prefer-inline"],
      "import-x/no-duplicates": ["error", { "prefer-inline": true }],
      "import-x/no-named-as-default-member": "off",
      "import-x/default": "off",
      "sonarjs/void-use": "off",
      "react/prop-types": "off",
      "react/self-closing-comp": "error",
      "react/jsx-boolean-value": ["warn", "never"],
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-no-leaked-render": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^node:"], // Node.js built-ins
            ["^react", "^@?\\w"], // React and external packages
            ["^\\u0000"], // Side effect imports
            ["^@\\/\\w+"], // Internal packages with @/
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"], // Parent imports
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"], // Relative imports
          ],
        },
      ],
      "simple-import-sort/exports": "warn",
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
        },
      ],
    },
  }
);
