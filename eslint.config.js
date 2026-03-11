// eslint.config.js (CommonJS version)
module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        browser: true,
        node: true
      }
    },
    rules: {
      "no-unused-vars": "warn"
    }
  }
];