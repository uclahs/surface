import Twig from 'twig';
import { useEffect } from '@storybook/preview-api';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import twigDrupal from 'twig-drupal-filters';
import twigAddAttributes from 'add-attributes-twig-extension';
import './drupal.js';
import '../dist/css/global.css';
import '../dist/css/utilities.css';
import '../dist/css/all.css';

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
  storyFn => {
    useEffect(() => Drupal.attachBehaviors(), []);
    return storyFn();
  },
];

const preview = {
  parameters: {
    options: {
      storySort: {
        order: [ 'Base', 'Elements', 'Components', 'Collections', 'Layouts', 'Pages', 'Theme', '*'],
      },
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
