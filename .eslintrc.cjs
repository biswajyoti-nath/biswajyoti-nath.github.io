module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  // Ignore: old vanilla JS, config files, generated files, and dist
  ignorePatterns: [
    "dist",
    "js/",
    "css/",
    "*.config.js",
    "*.config.cjs",
    "*.d.ts",
    "vite.config.ts",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
  },
};
