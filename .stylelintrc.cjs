module.exports = {
  extends: ["stylelint-config-standard"],
  customSyntax: require("@linaria/postcss-linaria"),
  rules: {
    "comment-empty-line-before": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["/^global$/"],
      },
    ],
    "value-keyword-case": [
      "lower",
      {
        ignoreFunctions: ["t", "var"],
        camelCaseSvgKeywords: true,
      },
    ],
  },
};
