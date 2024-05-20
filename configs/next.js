const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
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
    ".next",
    "out",
    ".*.js",
    ".*.ts",
    "*.config.js",
    "*.config.ts",
  ],
  overwrites: [
    {
      files: [
        "./**/page.tsx",
        "./**/template.tsx",
        "./**/layout.tsx",
        "./**/loading.tsx",
        "./**/error.tsx",
        "./**/not-found.tsx",
      ],
      rules: {
        "jsdoc/check-access": "off", // Recommended
        "jsdoc/check-alignment": "off", // Recommended
        "jsdoc/check-examples": "off",
        "jsdoc/check-indentation": "off",
        "jsdoc/check-line-alignment": "off",
        "jsdoc/check-param-names": "off", // Recommended
        "jsdoc/check-property-names": "off", // Recommended
        "jsdoc/check-syntax": "off",
        "jsdoc/check-tag-names": "off", // Recommended
        "jsdoc/check-types": "off", // Recommended
        "jsdoc/check-values": "off", // Recommended
        "jsdoc/empty-tags": "off", // Recommended
        "jsdoc/implements-on-classes": "off", // Recommended
        "jsdoc/informative-docs": "off",
        "jsdoc/match-description": "off",
        "jsdoc/multiline-blocks": "off", // Recommended
        "jsdoc/no-bad-blocks": "off",
        "jsdoc/no-blank-block-descriptions": "off",
        "jsdoc/no-defaults": "off",
        "jsdoc/no-missing-syntax": "off",
        "jsdoc/no-multi-asterisks": "off", // Recommended
        "jsdoc/no-restricted-syntax": "off",
        "jsdoc/no-types": "off",
        "jsdoc/no-undefined-types": "off", // Recommended
        "jsdoc/require-asterisk-prefix": "off",
        "jsdoc/require-description": "off",
        "jsdoc/require-description-complete-sentence": "off",
        "jsdoc/require-example": "off",
        "jsdoc/require-file-overview": "off",
        "jsdoc/require-hyphen-before-param-description": "off",
        "jsdoc/require-jsdoc": "off", // Recommended
        "jsdoc/require-param": "off", // Recommended
        "jsdoc/require-param-description": "off", // Recommended
        "jsdoc/require-param-name": "off", // Recommended
        "jsdoc/require-param-type": "off", // Recommended
        "jsdoc/require-property": "off", // Recommended
        "jsdoc/require-property-description": "off", // Recommended
        "jsdoc/require-property-name": "off", // Recommended
        "jsdoc/require-property-type": "off", // Recommended
        "jsdoc/require-returns": "off", // Recommended
        "jsdoc/require-returns-check": "off", // Recommended
        "jsdoc/require-returns-description": "off", // Recommended
        "jsdoc/require-returns-type": "off", // Recommended
        "jsdoc/require-throws": "off",
        "jsdoc/require-yields": "off", // Recommended
        "jsdoc/require-yields-check": "off", // Recommended
        "jsdoc/sort-tags": "off",
        "jsdoc/tag-lines": "off", // Recommended
        "jsdoc/valid-types": "off", // Recommended
      },
    },
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
    "sort-keys": ["error", "asc"],
  },
};
