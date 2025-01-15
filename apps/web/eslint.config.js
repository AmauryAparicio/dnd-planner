import baseConfig, { restrictEnvAccess } from "@panfo/eslint-config/base";
import nextjsConfig from "@panfo/eslint-config/nextjs";
import reactConfig from "@panfo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
