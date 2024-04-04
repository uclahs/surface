import parse from 'html-react-parser';

import { withBackground } from '../../../../.storybook/decorators';

import menu from './menu-utility.twig';

const settings = {
  title: 'Components/Menu utility',
};

export const menuUtility = {
  name: 'Menu utility',
  render: (args) => parse(menu(args)),
  decorators: [withBackground],
};

export default settings;
