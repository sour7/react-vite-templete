import eslintConfig from "codepolish-eslint-config/react.js";

export default [
  ...eslintConfig,
  {
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    ignores: [],
  },
];
