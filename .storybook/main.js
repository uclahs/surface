/** @type { import('@storybook/html-vite').StorybookConfig } */

// To support Github-flavored Markdown (MDX3).
// Source: https://storybook.js.org/docs/writing-docs/mdx#troubleshooting
import remarkGfm from 'remark-gfm';

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
    {
    name: '@storybook/addon-docs',
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
  },
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  staticDirs: ['../dist'],
};
export default config;
