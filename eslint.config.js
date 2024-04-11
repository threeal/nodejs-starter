import eslint from "@eslint/js";

export default [
  eslint.configs.recommended,
  {
    ignores: [".*", "coverage", "dist"],
  },
];
