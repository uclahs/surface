import parse from 'html-react-parser';

// Imports decorator to add background to the white social icons.
import { withBackground } from '../../../../.storybook/decorators';

import social from './menu-social.twig';
import data from './menu-social.yml';

const settings = {
  title: 'Components/Menu Social',
};

export const Social = {
  name: 'Menu social',
  render: (args) => parse(social(args)),
  args: { ...data },
  decorators: [ withBackground ],
};

export default settings;
