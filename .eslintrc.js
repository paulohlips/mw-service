const { settings } = require("cluster");
const { off } = require("process");

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/no-unresolved": "off",
    "no-useless-constructor": "off",
    "no-unused-vars": "off",
    "camelcase": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "class-methods-use-this":"off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "prefix": ["I"],
        "format": ["PascalCase"]
      }
    ]
  }
};
