module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  globals: {
    $nuxt: true,
  },
  // add your custom rules here
  rules: {
    "no-console": "off",
    "vue/multi-word-component-names": "off", // TODO: reconsider
    "vue/no-reserved-component-names": "off", // TODO: reconsider
  },
};
