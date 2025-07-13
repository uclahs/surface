import postcssGlobalData from '@csstools/postcss-global-data';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    autoprefixer(),
    postcssImportExtGlob(),
    postcssImport(),
    postcssNested(),
    postcssGlobalData({
      files: ['./source/props/media.css'],
    }),
    postcssPresetEnv({
      stage: 4,
      features: {
        'custom-media-queries': { preserve: false },
      },
    }),
  ],
};
