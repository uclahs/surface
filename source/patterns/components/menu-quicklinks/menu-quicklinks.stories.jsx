import parse from 'html-react-parser';

import menu from './menu-quicklinks.twig';
import data from './menu-quicklinks.yml';

const settings = {
  title: 'Components/Menu quicklinks',
};

export const menuQuicklinks = {
  name: 'Menu quicklinks',
  render: (args) => parse(menu(args)),
  args: { ...data },
};

export default settings;
