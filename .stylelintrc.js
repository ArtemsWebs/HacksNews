module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    indentation: 2,
    // @NOTE: This conflicts with @use from scss
    'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,

    // @NOTE: This conflicts with styled-components
    'no-empty-source': null,
    'no-descending-specificity': null,
    'value-keyword-case': null,
  },
};
