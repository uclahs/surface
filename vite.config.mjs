import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';
import { glob } from 'glob';

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
      // Twig namespaces for including components.
      namespaces: {
        base: join(__dirname, './source/base'),
        elements: join(__dirname, './source/elements'),
        components: join(__dirname, './source/components'),
        collections: join(__dirname, './source/collections'),
        layouts: join(__dirname, './source/layouts'),
        pages: join(__dirname, './source/pages'),
        theme: join(__dirname, './source/theme'),
      },
    }),
    yml(),
    // Copy static assets such as images from `source` to `dist/images`
    viteStaticCopy({
      targets: [
        {
          src: './source/examples/**/*.{gif,png,jpg,jpeg,svg,webp}',
          dest: 'images'
        }
      ]
    })
  ],
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    rollupOptions: {
      // Setting the input directory to be able to capture all CSS and JS files
      // that exist for each individual component.
      input: glob.sync(path.resolve(__dirname, 'source/examples/**/*.{css,js}')),
      output: {
        // Processes all CSS and JS files and individually compile them and
        // minify them`.
        assetFileNames: ({name}) => {
          if (/\.css$/.test(name ?? '')) {
              // CSS files get copied into `dist/css`.
              return 'css/[name][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return '[name][extname]';
        },
        // JS files get copied into `dist/js`.
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
