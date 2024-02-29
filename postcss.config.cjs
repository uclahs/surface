module.exports = {
  plugins: [
    require('@csstools/postcss-global-data')({
      files: ['./source/base/props/media.css'],
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
