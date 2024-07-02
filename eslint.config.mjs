import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      "no-undef": "off", // 关闭 no-undef 规则以避免 'require' is not defined 错误
      "@typescript-eslint/no-var-requires": "off", // 关闭 no-var-requires 规则
      // 关闭 any 类型检查
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];
