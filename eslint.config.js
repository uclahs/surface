import globals from "globals";
import standard from "@eslint/js";

export default [
  {
    // Ignores needs to be on its own object and probably as the first object.
    ignores: [
      'dist',
      'node_modules',
      'storybook',
      '**/glide.min.js',
      '**/typewriter.core.js',
      '**/glightbox.js'
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module",
    },
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      curly: 'error',
    }
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    }
  },
  standard.configs.recommended,
];
