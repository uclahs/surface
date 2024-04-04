import parse from 'html-react-parser';

import { withBackground } from '../../../../.storybook/decorators';

import menu from './menu-secondary.twig';
import data from './menu-secondary.yml';

const settings = {
  title: 'Components/Menu secondary',
};

export const menuSecondary = {
  name: 'Menu secondary',
  render: (args) => parse(menu(args)),
  args: { ...data },
  decorators: [withBackground],
};

export default settings;
