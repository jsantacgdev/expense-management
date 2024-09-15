module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'class-methods-use-this': 0,
    // Changing max row length from 80 to 150.
    // Remember to change in .editorconfig also, although am not sure if that file is even needed?
    // Especially as scaffolding gave 100 as max len while ESLint default is 80...
    'max-len': [
      'error',
      {
        code: 150,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    '@typescript-eslint/ban-ts-ignore': 0,
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': 'off',
    'no-plusplus': 'off',
    'linebreak-style': ['error', 'windows'],
    'vue/require-default-prop': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error']
  },
  // These are added if you chose also to install Jest plugin for Vue
  // With my own modifications here as an example
  overrides: [
    {
      files: ['./src/**/__tests__/*.spec.{j,t}s', './src/**/__mock__/*.{j,t}s'],
      env: {
        jest: true
      },
      rules: {
        'no-unused-expressions': 0
      }
    }
  ]
}
