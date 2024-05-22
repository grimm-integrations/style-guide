const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:prettier/recommended",
    "plugin:perfectionist/recommended-alphabetical",
    "plugin:jsdoc/recommended-typescript",
  ],
  plugins: [
    "@typescript-eslint",
    "perfectionist",
    "prettier",
    "react",
    "sort-destructure-keys",
    "jsdoc",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    ".*.js",
    ".*.cjs",
    ".*.ts",
    "*.config.js",
    "*.config.ts",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "builtin-type",
          "external-type",
          "parent-type",
          "sibling-type",
          "side-effect",
          ["style", "side-effect-style"],
        ],
      },
    ],
    "prefer-template": "error",
    "react/hook-use-state": "error",
    "react/react-in-jsx-scope": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "error",
      { caseSensitive: false },
    ],
  },
};
