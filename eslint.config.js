import eslint from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import { globalIgnores } from 'eslint/config';
import jestEslintPlugin from 'eslint-plugin-jest';

export default [
  globalIgnores(['dist/**']),
  {
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      'jest': jestEslintPlugin,
    },
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        project: true,
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      }
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tsEslintPlugin.configs['eslint-recommended'].rules,
      ...tsEslintPlugin.configs['recommended-type-checked'].rules,
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': 'error',
      'computed-property-spacing': ['error', 'never'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 'warn',
      'no-trailing-spaces': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'space-before-function-paren': ['error', 'always'],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts', '**/tests/**/*.ts', '**/__tests__/**/*.ts'],
    plugins: {
      'jest': jestEslintPlugin,
    },
    rules: {
      ...jestEslintPlugin.configs.recommended.rules,
      'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/valid-expect': 'error',
    },
    languageOptions: {
      globals: {
        ...jestEslintPlugin.environments.globals.globals
      }
    }
  },
];
