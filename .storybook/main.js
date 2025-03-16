/** @type { import('@storybook/html-vite').StorybookConfig } */

const config = {
  stories: [
    '../source/patterns/**/*.mdx',
    '../source/patterns/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ['../dist'],
};
export default config;
