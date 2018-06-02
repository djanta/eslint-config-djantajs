# eslint-config-djantajs

[![npm](https://img.shields.io/npm/v/eslint-config-djantajs.svg?style=flat)](https://github.com/djanta/eslint-config-djantajs)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-djantajs.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-djantajs)
[![Build Status](https://travis-ci.org/djanta/eslint-config-djantajs.svg?branch=master)](https://travis-ci.org/djanta/eslint-config-djantajs)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat)](https://gitter.im/djantajs/tools?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> djantajs shared coding style

## Installation

```
$ npm i --save-dev eslint eslint-config-djantajs
```


## Usage

Once the `eslint-config-djantajs` package is installed, you can use it by specifying `djantajs` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  extends: 'djantajs',
  rules: {
    // Additional, per-project rules...
  }
}
```

### Using the `djantajs` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that style is not opinionated about that you might want to enforce in your project.

To use this coding style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `djantajs` last:

```js
{
  extends: ['eslint:recommended', 'djantajs'],
  rules: {
    // Additional, per-project rules...
  }
}
```

To see how the `djantajs` config compares with `eslint:recommended`, refer to the [source code of `index.js`](https://github.com/djantajs/eslint-config-djantajs/blob/master/index.js), which lists every ESLint rule along with whether (and how) it is enforced by the `djantajs` config.

## License
