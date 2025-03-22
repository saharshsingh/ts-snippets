import eslint from '@eslint/js';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import jestEslintPlugin from 'eslint-plugin-jest';
import prettierPlugin from 'eslint-plugin-prettier';
import { globalIgnores } from 'eslint/config';

export default [
  globalIgnores(['dist/**']),
  {
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      jest: jestEslintPlugin,
      prettier: prettierPlugin,
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
      },
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...tsEslintPlugin.configs['eslint-recommended'].rules,
      ...tsEslintPlugin.configs['recommended-type-checked'].rules,
      ...prettierConfig.rules,
      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': 'error',
      'computed-property-spacing': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-console': 'warn',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts', '**/tests/**/*.ts', '**/__tests__/**/*.ts'],
    plugins: {
      jest: jestEslintPlugin,
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
        ...jestEslintPlugin.environments.globals.globals,
      },
    },
  },
];
