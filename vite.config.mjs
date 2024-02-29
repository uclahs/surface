import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    checker({
      eslint: {
        lintCommand: 'eslint "./source/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./source/**/*.css"',
      },
    }),
    twig({
      namespaces: {
        base: join(__dirname, './source/base'),
        collections: join(__dirname, './source/collections'),
        components: join(__dirname, './source/components'),
        elements: join(__dirname, './source/elements'),
        layouts: join(__dirname, './source/layouts'),
        pages: join(__dirname, './source/pages'),
        theme: join(__dirname, './source/theme'),
      },
    }),
    yml(),
  ],
  build: {
    rollupOptions: {
      input: {
        global: './source/base/global.css',
        utilties: './source/base/utilities.css',
      },
      output: {
        assetFileNames: '[name].css',
      },
    },
    sourcemap: true,
    manifest: false,
  },
  css: {
    devSourcemap: true,
  },
});
