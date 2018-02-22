module.exports = {
  env: {
    browser: true
  },
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
  }
};