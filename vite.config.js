import { defineConfig } from 'vite';
import twig from 'vite-plugin-twig-drupal';
import yml from '@modyfi/vite-plugin-yaml';
import { join } from 'node:path';
import path from 'path';
import { glob } from "glob"
import checker from 'vite-plugin-checker';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    // Linting for js and css.
    checker({
      eslint: {
        lintCommand: 'eslint "source/patterns/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "source/patterns/**/*.css"',
      },
    }),
    // Copy js and images from source to dist
    viteStaticCopy({
      targets: [{
        src: 'source/patterns/**/*.js',
        dest: 'js',
      },
      {
        src: 'source/patterns/**/*.{png,jpg,jpeg,svg,webp,mp4}',
        dest: 'images',
      }],
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
  ],
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname,'source/patterns/**/*.css')),
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
  // Excluding chunk_react from pre-bundling. This solves warning messages in
  // command line which prevented components docs from displaying.
  // https://vitejs.dev/config/dep-optimization-options
  optimizeDeps: {
    exclude: ["chunk_react"],
  },
});
