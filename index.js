'use strict';

/*
 * credit: https://gist.github.com/dmnsgn/75926316af5360c379da
 */
module.exports = {
  rules: {

    // The rules below are listed in the order they appear on the eslint
    // rules page. All rules are listed to make it easier to keep in sync
    // as new ESLint rules are added.
    // http://eslint.org/docs/rules/
    // - Rules in the `eslint:recommended` ruleset that aren't specifically
    //   mentioned by the google styleguide are listed but commented out (so
    //    they don't override a base ruleset).

    // Possible Errors
    // http://eslint.org/docs/rules/#possible-errors
    // ---------------------------------------------
    // 'for-direction': 0,
    // 'no-await-in-loop': 0,
    'no-compare-neg-zero': 'error', // eslint:recommended
    'no-cond-assign': 0, // eslint:recommended

    'no-console': 'error', // eslint:recommended
    'no-constant-condition': ['error', { checkLoops: false }],
                                                        // eslint:recommended
    'no-control-regex': 'error', // eslint:recommended
    'no-debugger': 'error', // eslint:recommended
    'no-dupe-args': 'error', // eslint:recommended
    'no-dupe-keys': 'error', // eslint:recommended
    'no-duplicate-case': 'error', // eslint:recommended
    'no-empty': 'error', // eslint:recommended
    'no-empty-character-class': 'error', // eslint:recommended
    // 'no-ex-assign': 2, // eslint:recommended
    'no-extra-boolean-cast': 'error', // eslint:recommended
    'no-extra-parens': ['error', 'all', {
      ignoreJSX: 'all',
      returnAssign: false,
      nestedBinaryExpressions: false,
      conditionalAssign: false
    }],
    'no-extra-semi': 'error', // eslint:recommended
    'no-func-assign': 'error', // eslint:recommended
    'no-inner-declarations': 'error', // eslint:recommended
    // eslint:recommended
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],
    'no-irregular-whitespace': 'error', // eslint:recommended
    'no-obj-calls': 'error', // eslint:recommended
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error', // eslint:recommended
    'no-sparse-arrays': 'error', // eslint:recommended
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error', // eslint:recommended
    // 'no-unreachable': 'error', // eslint:recommended
    'no-unsafe-finally': 'error', // eslint:recommended
    'no-unsafe-negation': 'error',
    'use-isnan': 'error', // eslint:recommended
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
      prefer: { returns: 'return' },
    }],
    // eslint:recommended
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // Best Practices
    // http://eslint.org/docs/rules/#best-practices
    // --------------------------------------------

    // 'accessor-pairs': 0,
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': ['error'/* , { exceptMethods: [''] } */],
    'complexity': ['error', { max: 10 }],
    // 'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    'curly': ['error', 'multi-line', 'consistent'],
    'default-case': ['error', {
      commentPattern: '^(skip\\sdefault)|(ignore\\sdefault)|(no\\sdefault)'
    }],
    'dot-location': ['error', 'property'],
    'dot-notation': ['error', {
      allowKeywords: false,
      allowPattern: '^[a-z]+(_[a-z]+)+$'
    }],
    'eqeqeq': ['error', 'always'],
    'guard-for-in': 'error',
    // 'no-alert': 0,
    'no-caller': 'error',
    // 'no-case-declarations': 'error', // eslint:recommended
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error', // eslint:recommended
    'no-eq-null': 'error',
    // 'no-eval': 0,
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    // eslint:recommended
    'no-fallthrough': ['error', { commentPattern: 'break[\\s\\w]*omitted' }],
    'no-floating-decimal': 'error',
    // 'no-global-assign': 0,
    'no-implicit-coercion': ['error', { allow: ['!!', '~'] }],
    // 'no-implicit-globals': 0,
    // 'no-implied-eval': 0,
    'no-invalid-this': 'error',
    // 'no-iterator': 0,
    // 'no-labels': 0,
    // 'no-lone-blocks': 0,
    // 'no-loop-func': 0,
    // 'no-magic-numbers': 0,
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error', // eslint:recommended
    'no-octal-escape': 'error',
    // 'no-param-reassign': 0,
    // 'no-proto': 0,
    'no-redeclare': 'error', // eslint:recommended
    // 'no-restricted-properties': 0,
    // 'no-return-assign': 0,
    // 'no-script-url': 0,
    // 'no-self-assign': 'error', // eslint:recommended
    // 'no-self-compare': 0,
    // 'no-sequences': 0,
    'no-throw-literal': 'error', // eslint:recommended
    // 'no-unmodified-loop-condition': 0,
    // 'no-unused-expressions': 0,
    // 'no-unused-labels': 'error', // eslint:recommended
    // 'no-useless-call': 0,
    // 'no-useless-concat': 0,
    // 'no-useless-escape': 0,
    // 'no-void': 0,
    // 'no-warning-comments': 0,
    'no-with': 'error',
    // 'prefer-promise-reject-errors': 0,
    // 'radix': 0,
    // 'require-await': 0,
    // 'vars-on-top': 0,
    // 'wrap-iife': 0,
    // 'yoda': 0,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    // -----------------------------------------
    'strict': ['error', 'global'],

    // Variables
    // http://eslint.org/docs/rules/#variables
    // ---------------------------------------
    // 'init-declarations': 0,
    // 'no-catch-shadow': 0,
    // 'no-delete-var': 'error', // eslint:recommended
    // 'no-label-var': 0,
    // 'no-restricted-globals': 0,
    // 'no-shadow': 0,
    // 'no-shadow-restricted-names': 0,
    // 'no-undef': 'error', // eslint:recommended
    // 'no-undef-init': 0,
    // 'no-undefined': 0,
    'no-unused-vars': ['error', { args: 'none' }], // eslint:recommended
    'no-use-before-define': ['error', {
      variables: false,
      classes: false,
      functions: false
    }],

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -------------------------------------------------
    'callback-return': ['error', ['callback', 'cb', 'next']],
    'global-require': 'error',
    'handle-callback-err': ['error', '^(err|error|ex)$'],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    // 'no-process-env': 0,
    // 'no-process-exit': 0,
    // 'no-restricted-modules': 0,
    // 'no-sync': 0,
    // 'no-buffer-constructor': 0,
    // 'no-mixed-requires': 0,

    // Stylistic Issues
    // http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------
    'array-bracket-newline': 0, // eslint:recommended
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': 0, // eslint:recommended
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'camelcase': ['error', { properties: 'never' }],
    // 'capitalized-comments': 0,
    'comma-dangle': ['error', 'only-multiline', { 'functions': 'never' }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    // 'consistent-this': 0,
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'/* , { 'allowNewlines': true } */],
    // 'func-name-matching': 0,
    // 'func-names': 0,
    // 'func-style': 0,
    // 'id-blacklist': 0,
    // 'id-length': 0,
    // 'id-match': 0,
    // 'indent': ['error', 'error', { VariableDeclarator: 1 }],
    // 'jsx-quotes': 0,
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    // 'line-comment-position': 0,
    'linebreak-style': 'error',
    // 'lines-around-comment': 0,
    'max-depth': ['error', { max: 3 }],
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreRegExpLiterals: true,
      ignoreUrls: true
    }],
    // 'max-lines': 0,
    // 'max-nested-callbacks': 0,
    'max-params': ['error', 4],
    'max-statements': ['error', 10, { ignoreTopLevelFunctions: true }],
    'max-statements-per-line': ['error', { max: 2 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    // 'new-parens': 0,
    // 'newline-per-chained-call': 0,
    'no-array-constructor': 'error',
    // 'no-bitwise': 0,
    // 'no-continue': 0,
    // 'no-inline-comments': 0,
    'no-lonely-if': 'error',
    // 'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 'error', // eslint:recommended
    // 'no-multi-assign': 0,
    'no-multiple-empty-lines': ['error', { max: 2 }],
    // 'no-negated-condition': 0,
    // 'no-nested-ternary': 0,
    'no-new-object': 'error',
    // 'no-plusplus': 0,
    // 'no-restricted-syntax': 0,
    'no-tabs': 'error',
    // 'no-ternary': 0,
    'no-trailing-spaces': 'error',
    // 'no-underscore-dangle': 0,
    // 'no-unneeded-ternary': 0,
    // 'no-whitespace-before-property': 0,
    // 'nonblock-statement-body-position': 0,
    // 'object-curly-newline': 0,
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', {
      'allowMultiplePropertiesPerLine': true
    }],
    'one-var': ['error', {
      var: 'never',
      let: 'never',
      const: 'never',
      // uninitialized: 'never',
      // initialized: 'always',
      separateRequires: true
    }],
    // 'one-var-declaration-per-line': ['error'],
    // 'operator-assignment': 0,
    // 'operator-linebreak': 0,
    'padded-blocks': ['error', 'never'],
    // 'padding-line-between-statements': 0,
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
    'semi': 'error',
    'semi-spacing': 'error',
    // 'semi-style': 0,
    // 'sort-keys': 0,
    // 'sort-vars': 0,
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      asyncArrow: 'always',
      anonymous: 'always',
      named: 'always',
    }],
    'space-in-parens': ['error', 'never'/* , { exceptions: ['empty'] } */],
    // 'space-infix-ops': 0,
    // 'space-unary-ops': 0,
    'spaced-comment': ['error', 'always'],
    'switch-colon-spacing': 'error',
    // 'template-tag-spacing': 0,
    // 'unicode-bom': 0,
    // 'wrap-regex': 0,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    // ------------------------------------------
    // 'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    // 'arrow-spacing': 0,
    'constructor-super': 'error', // eslint:recommended
    'generator-star-spacing': ['error', 'after'],
    // 'no-class-assign': 0,
    // 'no-confusing-arrow': 0,
    // 'no-const-assign': 0, // eslint:recommended
    // 'no-dupe-class-members': 0, // eslint:recommended
    // 'no-duplicate-imports': 0,
    'no-new-symbol': 'error', // eslint:recommended
    // 'no-restricted-imports': 0,
    'no-this-before-super': 'error', // eslint:recommended
    // 'no-useless-computed-key': 0,
    // 'no-useless-constructor': 0,
    // 'no-useless-rename': 0,
    'no-var': 'error',
    // 'object-shorthand': 0,
    // 'prefer-arrow-callback': 0,
    // 'prefer-const': 0,
    // 'prefer-destructuring': 0,
    // 'prefer-numeric-literals': 0,
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    // 'prefer-template': 0,
    // 'require-yield': 'error', // eslint:recommended
    'rest-spread-spacing': 'error',
    // 'sort-imports': 0,
    // 'symbol-description': 0,
    // 'template-curly-spacing': 0,
    'yield-star-spacing': ['error', 'after'],
  },
};
