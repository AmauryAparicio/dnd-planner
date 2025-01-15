import baseConfig, { restrictEnvAccess } from "@panfo/eslint-config/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...restrictEnvAccess,
];
