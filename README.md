# @miirinjej/stylelint-config-extra

[![npm version](https://img.shields.io/npm/v/@miirinjej/stylelint-config-extra.svg)](https://www.npmjs.org/package/@miirinjej/stylelint-config-extra)

> Standalone sharable stylelint config with additional extensions for CSS/SCSS

Since the basic rules are not presented here, I recommend that you use the main config in addition to this
([list of the most used configs](https://github.com/stylelint/awesome-stylelint#configs)
or [@miirinjej/stylelint-config](https://github.com/miirinjej/stylelint-config)).

## Installation

```
npm install --save-dev @miirinjej/stylelint-config-extra stylelint
```

## Usage

Add this config to `package.json`:

```yaml
"stylelint": {
  "extends": "@miirinjej/stylelint-config-extra"
}
```

See also: [https://stylelint.io/user-guide/configure](https://stylelint.io/user-guide/configure)

### Extending the config

You can extend the current configuration by overriding rules or an array of existing configurations:

```yaml
{
  "extends": ["@miirinjej/stylelint-config-extra", "./stylelint.config.js"],
  "rules": {
    "color-format/format": {
      "format": "rgb"
    }
  }
}
```

See also: [https://stylelint.io/user-guide/configure#extends](https://stylelint.io/user-guide/configure#extends)

## Extensions

- [stylelint-8-point-grid](https://github.com/darwintantuco/stylelint-8-point-grid)
  — Validate CSS with 8-point grid guideline.
- [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format)
  — Convert HEX colors to either RGB or HSL.
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
  — Disallow property values that are ignored due to another property value in the same rule.
- [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value)
  — Specify properties for which either a variable (`$sass`, `@less`, `var(--cssnext)`), function or custom CSS keyword
  (`inherit`, `none`, etc.) must be used for its value.
- [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation)
  — Stylelint rule for preventing the use of low performance animation and transition properties.

## Rules

See [config](https://github.com/miirinjej/stylelint-config-extra/blob/master/index.js) itself.

Rules are grouped and sorted by default as in the original lists:

- [stylelint-8-point-grid](https://github.com/darwintantuco/stylelint-8-point-grid#extending-the-config)
- [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format#configuration-1)
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties#usage)
- [stylelint-declaration-strict-value](https://github.com/AndyOGo/stylelint-declaration-strict-value#primary-options)
- [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation#options)
