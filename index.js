module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: ['stylelint-8-point-grid'],
  plugins: [
    'stylelint-color-format',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-declaration-strict-value',
    'stylelint-high-performance-animation',
  ],
  rules: {
    /**
     * 8-point grid
     */
    'plugin/8-point-grid': {
      base: 4,
      allowlist: [],
      ignorelist: [],
    },

    /**
     * Color format
     */
    'color-format/format': {
      format: 'hsl',
    },

    /**
     * No ignored properties
     */
    'plugin/declaration-block-no-ignored-properties': true,

    /**
     * Strict value
     */
    'scale-unlimited/declaration-strict-value': [
      ['/color$/', 'z-index', 'font-size'],
      { disableFix: true },
    ],

    /**
     * High performance animation
     */
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignoreProperties: [],
      },
    ],
  },
};
