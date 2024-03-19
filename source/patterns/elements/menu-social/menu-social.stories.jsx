import parse from 'html-react-parser';

import { withDarkMode } from '../../../../.storybook/decorators';
import social from './menu-social.twig';
import data from './menu-social.yml';

const settings = {
  title: 'Elements/Menu Social',
};

const Social = {
  name: 'Menu social',
  render: (args) => parse(social(args)),
  args: { ...data },
  decorators: [ withDarkMode ],
};

export default settings;
export { Social };
