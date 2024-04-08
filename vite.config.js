import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import fg from 'fast-glob';
import { watchAndRun } from 'vite-plugin-watch-and-run';

export default defineConfig({
  plugins: [
    // Linting for js and css.
    checker({
      eslint: {
        lintCommand: 'eslint "source/patterns/**/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "source/patterns/**/**/*.css"',
      },
    }),
    // Copy js and images from source to dist
    viteStaticCopy({
      targets: [{
        src: 'source/patterns/**/**/*.js',
        dest: 'js',
      },
      {
        src: 'source/patterns/**/**/*.{png,jpg,jpeg,svg,webp,mp4}',
        dest: 'images',
      }],
    }),
    // Watch for css, js and image changes.
    watchAndRun([
      {
        name: 'css',
        watchKind: ['add', 'change', 'unlink'],
        watch: fg.sync('source/patterns/**/**/*.css', { absolute: true }),
        run: 'npm run build',
        delay: 300,
      },
      {
        name: 'js',
        watchKind: ['add', 'change', 'unlink'],
        watch: fg.sync('source/patterns/**/**/*.js', { absolute: true }),
        run: 'npm run build',
        delay: 300,
      },
      {
        name: 'images',
        watchKind: ['add', 'change', 'unlink'],
        watch: fg.sync('source/patterns/**/**/*.{png,jpg,jpeg,svg,webp,mp4}', { absolute: true }),
        run: 'npm run build',
        delay: 300,
      },
    ]),
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
  ],
  build: {
    emptyOutDir: true,
    minify: false,
    outDir: 'dist',
    rollupOptions: {
      input: fg.sync('source/patterns/**/*.css', { absolute: true }),
      output: {
        assetFileNames: 'css/[name].css',
      },
    },
    sourcemap: true,
    manifest: false,
  },
  css: {
    devSourcemap: true,
  },
});
