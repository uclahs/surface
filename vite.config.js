import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { glob } from 'glob';
import { watchAndRun } from 'vite-plugin-watch-and-run';

export default defineConfig({
  plugins: [
    checker({
      eslint: {
        lintCommand: 'eslint "./source/patterns/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./source/patterns/**/*.css"',
      },
    }),
    // Twig namespaces for including components.
    twig({
      namespaces: {
        base: join(__dirname, './source/patterns/base'),
        elements: join(__dirname, './source/patterns/elements'),
        components: join(__dirname, './source/patterns/components'),
        collections: join(__dirname, './source/patterns/collections'),
        layouts: join(__dirname, './source/patterns/layouts'),
        pages: join(__dirname, './source/patterns/pages'),
        theme: join(__dirname, './source/patterns/theme'),
      },
    }),
    // YML for including data.
    yml(),
    // Copy static images from `source` to `dist/images`
    viteStaticCopy({
      targets: [
        {
          src: './source/patterns/**/*.{png,jpg,jpeg,svg,webp}',
          dest: 'images',
        },
      ],
    }),
    watchAndRun([
      {
        name: 'css',
        watchKind: ['add', 'change', 'unlink'],
        watch: path.resolve('source/patterns/**/*.css'),
        run: 'vite build',
        delay: 300,
      },
      {
        name: 'js',
        watchKind: ['add', 'change', 'unlink'],
        watch: path.resolve('source/patterns/**/*.js'),
        run: 'vite build',
        delay: 300,
      },
      {
        name: 'images',
        watchKind: ['add', 'change', 'unlink'],
        watch: path.resolve('source/patterns/**/images/*.{png,jpg,jpeg,svg,webp}'),
        run: 'vite build',
        delay: 300,
      },
    ]),
  ],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      // Recursively globbing through all css/js files within the source directory.
      input: [
        ...glob.sync(path.resolve(__dirname, 'source/patterns/**/*.{css,js}')),
        // Next line captures the scripts.js file which includes all components' JS.
        ...glob.sync(path.resolve(__dirname, 'source/patterns/*.js')),
      ],
      output: {
        // Outputs assets into their respective directories within `dist`..
        assetFileNames: 'css/[name].css',
        entryFileNames: 'js/[name].js',
      },
    },
    sourcemap: true,
    manifest: false,
  },
  css: {
    devSourcemap: true,
  },
});
