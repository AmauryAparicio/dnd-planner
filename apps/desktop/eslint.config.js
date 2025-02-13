import baseConfig from "@panfo/eslint-config/base";
import reactConfig from "@panfo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["src-tauri/target/**/*"],
  },
  ...baseConfig,
  ...reactConfig,
];
