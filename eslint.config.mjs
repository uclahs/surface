import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      '**/.eslintrc.yml',
      '**/*.config.js',
    ],
  },
  ...compat.extends('plugin:prettier/recommended'),
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        expect: true,
        it: true,
        describe: true,
        Drupal: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/ignore': ['\\.(css)$'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
          moduleDirectory: ['node_modules', 'source/'],
        },
      },
    },
    rules: {
      strict: 0,
      'import/no-extraneous-dependencies': 0,
      'prettier/prettier': 0,
    },
  },
];
