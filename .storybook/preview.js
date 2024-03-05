import Twig from 'twig';
import { useEffect } from '@storybook/preview-api';
import twigDrupal from 'twig-drupal-filters';
import twigAddAttributes from 'add-attributes-twig-extension';
import './drupal.js';
import '../dist/css/global.css';
import '../dist/css/utilities.css';

function setupTwig(twig) {
  twig.cache();
  twigDrupal(twig);
  twigAddAttributes(twig);
  return twig;
}

setupTwig(Twig);

export const decorators = [
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
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;
