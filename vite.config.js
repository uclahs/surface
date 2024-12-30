/* eslint-disable */
import { defineConfig } from "vite"
import yml from '@modyfi/vite-plugin-yaml';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path";
import path from 'path';
import { glob } from 'glob';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    // Twig namespaces for nesting components.
    twig({
      namespaces: {
        assets: join(__dirname, './source/assets'),
        base: join(__dirname, './source/patterns/base'),
        elements: join(__dirname, './source/patterns/elements'),
        components: join(__dirname, './source/patterns/components'),
        collections: join(__dirname, './source/patterns/collections'),
        layouts: join(__dirname, './source/patterns/layouts'),
        pages: join(__dirname, './source/patterns/pages'),
        theme: join(__dirname, './source/patterns/theme'),
      },
    }),
    // Allows Storybook to read data from YAML files.
    yml(),
    // Run eslint during build.
    eslint(),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname,'./source/patterns/**/*.{css,js}')),
      output: {
        assetFileNames: 'css/[name].css',
        entryFileNames: 'js/[name].js',
      },
    },
  },
  publicDir: 'source/assets',
  css: {
    devSourcemap: true,
  },
})
