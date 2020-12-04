module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    // reglas recomendadas
    "at-rule-no-unknown": null,
    "scss / at-rule-no-unknown": true,

    // cualquier otra regla que desee cambiar, por ejemplo,
    "selector-nested-pattern": "^&",
    indentation: 2,
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,

    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "use",
          "screen",
        ],
      },
    ],

    "scss / dollar-variable-pattern": "^ foo",
    "scss / selector-no-redundant-nesting-selector": true,
  },
};
