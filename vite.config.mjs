import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
      input: {
        global: './source/base/global.css',
        utilties: './source/base/utilities.css',
        button: './source/examples/button/button.css',
        chip: './source/examples/chip/chip.css',
      },
      output: {
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')){
              return 'images/[name][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
              return 'css/[name][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return '[name][extname]';
        },
      },
    },
    sourcemap: true,
    manifest: false,
  },
  css: {
    devSourcemap: true,
  },
});
