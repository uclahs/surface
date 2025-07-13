/** @type { import('@storybook/html-vite').Preview } */

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { useEffect } from 'storybook/preview-api';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// Imports custom device viewports.
import customViewports from './viewports';

// Imports custom JS to allow Storybook to understand Drupal behaviors.
import './drupal/drupal';
import './drupal/once';

// Imports FontAwesome icons from a specific kit.
import 'https://kit.fontawesome.com/a0eb0bad75.js';

// Imports the CSS for all components combined into a single stylesheet.
import '../source/patterns/styles.css';

// Imports all Storybook CSS for display.
import '../source/patterns/storybook.css';

function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  return twig;
}

setupTwig(Twig);

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Surface: 'surface',
      Other: 'other',
    },
    defaultTheme: 'Surface',
    attributeName: 'data-theme',
  }),
  (storyFn) => {
    useEffect(() => Drupal.attachBehaviors(), []); // eslint-disable-line
    return storyFn();
  },
];

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Getting started',
          ['Intro'],
          'Base',
          'Elements',
          'Components',
          'Collections',
          'Layouts',
          'Pages',
          'Theme',
          '*',
        ],
        includeName: true,
      },
    },
    viewport: { viewports: customViewports },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
