import baseConfig from "@panfo/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".nitro/**", ".output/**"],
  },
  ...baseConfig,
];
