module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'babel', '@typescript-eslint/eslint-plugin'],
  globals: {
    ActiveXObject: false,
    describe: false,
    it: false,
    expect: false,
    jest: false,
    $: false,
    afterEach: false,
    beforeEach: false,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
      },
    },
  ],
  rules: {
    'prettier/prettier': ['error', { trailingComma: 'es5', printWidth: 100 }],
    'no-case-declarations': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-useless-constructor': 0,
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    'no-restricted-syntax': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-script-url': 0,
    'no-extend-native': 0,
    'no-restricted-globals': 0,
    'no-nested-ternary': 0,
    'no-empty': 0,
    'no-void': 0,
    'no-useless-escape': 0,
    'no-bitwise': 0,
    'no-mixed-operators': 0,
    'consistent-return': 0,
    'one-var': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-destructuring': 0,
    'global-require': 0,
    'guard-for-in': 0,
    'func-names': 0,
    strict: 0,
    radix: 0,
    'no-prototype-builtins': 0,
    'class-methods-use-this': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-useless-fragment': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-danger': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'react/sort-comp': 0,
    'react/no-did-update-set-state': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-no-bind': 0,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-find-dom-node': 0,
    'react/default-props-match-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'react/jsx-indent': 0,
    'react/display-name': 0,
    'react/no-multi-comp': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'react/button-has-type': 0,
    'react/require-default-props': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-render-return-value': 0,
    'array-callback-return': 0,
    'no-cond-assign': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-shadow': 0,
    'no-continue': 0,
    'no-loop-func': 0,
    'prefer-spread': 0,
    'no-undef': 0,
    'no-lonely-if': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-duplicates': 'off',
    'react/jsx-key': 'off',
    'no-return-await': 'off',
    'react/no-unused-prop-types': 'off',
    'no-await-in-loop': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
