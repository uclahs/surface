import Twig from 'twig';
import { useEffect } from '@storybook/preview-api';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import twigDrupal from 'twig-drupal-filters';

// Imports custom JS to allow Storybook to understand Drupal behaviors.
import './drupal.js';

// Imports FontAwesome icons from a specific kit.
import 'https://kit.fontawesome.com/a0eb0bad75.js';

// Imports all global props most of which are css custom properties.
import '../dist/css/global.css';

// Imports all custom CSS utilities.
import '../dist/css/utilities.css';

// Imports all Storybook CSS for display.
import '../dist/css/storybook.css';

// Imports the CSS for all components combined into a single stylesheet.
import '../dist/css/styles.css';

// Imports JS for any components that need it combined into a single script file.
import '../dist/js/scripts.js';

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
      DGSOM: 'dgsom',
      Labs: 'labs',
      'Labs Dynamic': 'labs-dynamic',
    },
    defaultTheme: 'Surface',
    attributeName: 'data-theme',
  }),
  (storyFn) => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return storyFn();
  },
];

const customViewports = {
  mobileSmall: {
    name: 'Mobile small',
    styles: {
      width: '400px',
      height: '963px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '640px',
      height: '801px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '801px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '801px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '801px',
    },
  },
  desktopLarge: {
    name: 'Desktop large',
    styles: {
      width: '1440px',
      height: '801px',
    },
  },
};

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [ 'Getting started',['Intro'], 'Base', 'Elements', 'Components', 'Collections', 'Layouts', 'Pages', 'Theme', '*' ],
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
