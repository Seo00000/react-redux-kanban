module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:react-hooks/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'prefer-const': 'error',
    'no-var': 'error',
    'spaced-comment': ['error', 'always'],
    'no-param-reassign': 'error',
    'no-return-await': 'error',
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'error',
  },
};
