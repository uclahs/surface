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
        lintCommand: 'eslint "./source/patterns/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./source/patterns/**/*.css"',
      },
    }),
    twig({
      // Twig namespaces for including components.
      namespaces: {
        assets: join(__dirname, './source/assets'),
        base: join(__dirname, './source/base'),
        elements: join(__dirname, './source/patterns/elements'),
        components: join(__dirname, './source/patterns/components'),
        collections: join(__dirname, './source/patterns/collections'),
        layouts: join(__dirname, './source/patterns/layouts'),
        pages: join(__dirname, './source/patterns/pages'),
        theme: join(__dirname, './source/patterns/theme'),
      },
    }),
    yml(),
    // Copy static images from `source` to `dist/images`
    viteStaticCopy({
      targets: [
        {
          src: './source/**/*.{png,jpg,jpeg,svg,webp}',
          dest: 'images'
        }
      ]
    })
  ],
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    rollupOptions: {
      // Recursively globbing through all CSS and JS files
      // within the source directory.
      input: [
        ...glob.sync(path.resolve(__dirname, 'source/base/*.css')),
        ...glob.sync(path.resolve(__dirname, 'source/patterns/**/*.{css,js}')),
        ...glob.sync(path.resolve(__dirname, 'source/assets/css/*.css')),
      ],
      output: {
        // Outputs CSS and JS into their respective directories within `dist`..
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
