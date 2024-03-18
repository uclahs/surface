module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('@csstools/postcss-global-data')({
      files: ['./source/props/media.css'],
    }),
    require('postcss-advanced-variables')(),
    require('postcss-nested')(),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'custom-media-queries': { preserve: true },
        'logical-properties-and-values': false,
      },
    }),
  ],
};
