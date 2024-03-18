import Twig from 'twig';
import { useEffect } from '@storybook/preview-api';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import twigDrupal from 'twig-drupal-filters';
import twigAddAttributes from 'add-attributes-twig-extension';
import './drupal.js';
import '../dist/css/global.css';
import '../dist/css/utilities.css';
import '../dist/css/styles.css';

function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  twigAddAttributes(twig);
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
    defaultTheme: 'surface',
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
