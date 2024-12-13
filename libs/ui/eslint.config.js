const nx = require('@nx/eslint-plugin');
const baseConfig = require('../../eslint.config.js');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
  },
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'tdr',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: ['attribute', 'element'],
          prefix: 'tdr',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-class-suffix': 0,
      '@angular-eslint/component-class-suffix': 0,
      '@angular-eslint/no-host-metadata-property': 0,
      '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
      '@angular-eslint/prefer-output-readonly': ['error'],
      '@angular-eslint/prefer-standalone': ['error'],
      '@angular-eslint/sort-lifecycle-methods': ['error'],
      '@angular-eslint/use-injectable-provided-in': ['error'],
      '@angular-eslint/consistent-component-styles': ['error'],
    },
  },
  {
    files: ['**/*.html'],
    // Override or add rules here
    rules: {},
  },
];
