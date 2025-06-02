import { addons } from 'storybook/manager-api';
import surfaceTheme from './theme';

addons.setConfig({
  theme: surfaceTheme,
  // Collapses Stories roots by default for easier navigation.
  sidebar: {
    collapsedRoots: ['base', 'elements', 'components', 'collections', 'layouts', 'pages'],
  },
});
