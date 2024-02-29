import Twig from 'twig';
import { useEffect } from '@storybook/preview-api';
import twigDrupal from 'twig-drupal-filters';
import twigAddAttributes from 'add-attributes-twig-extension';
import './drupal.js';
import '../dist/global.css';
import '../dist/utilties.css';

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

export const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Base',
          'Layouts',
          'Elements',
          'Components',
          'Collections',
          'Pages',
          'Theme',
        ],
        includeName: true,
      },
    },
  },
};
