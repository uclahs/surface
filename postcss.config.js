import postcssImport from 'postcss-import';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import postcssGlobalData from '@csstools/postcss-global-data';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';

export default {
  plugins: [
    postcssImportExtGlob(),
    postcssImport(),
    postcssGlobalData({
      files: ['./source/props/media.css'],
    }),
    postcssNested(),
    postcssPresetEnv({
      stage: 4,
      features: {
        'custom-media-queries': { preserve: false }
      },
    }),
  ],
};
