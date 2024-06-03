const config = {
  stories: [
    '../source/patterns/**/*.mdx',
    '../source/patterns/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-mdx-gfm'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {},
  staticDirs: ['../dist'],
};

export default config;
