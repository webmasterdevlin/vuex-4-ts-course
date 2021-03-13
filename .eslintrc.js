module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true,
  },
  plugins: ["testing-library", "jest-dom"],
  extends: [
    "plugin:testing-library/recommended",
    "plugin:testing-library/vue",
    "plugin:jest-dom/recommended",
    "plugin:vue/vue3-essential",
    'plugin:vue/recommended',
    'plugin:testing-library/vue',
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/no-mutating-props": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
