module.exports = {
  env: {
    browser: true
  },
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "jsx-a11y/rule-name": 2,
  }
};