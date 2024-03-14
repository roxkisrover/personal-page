module.exports = {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "scss/double-slash-comment-empty-line-before": null,
    "value-keyword-case": [
      "lower",
      {
        ignoreFunctions: ["t", "var"],
        camelCaseSvgKeywords: true,
      },
    ],
  },
};
