import parse from 'html-react-parser';

import menu from './menu-main.twig';
import data from './menu-main.yml';

const settings = {
  title: 'Components/Menu main',
};

export const MenuMain = {
  name: 'Menu main',
  render: (args) => parse(menu(args)),
  args: { ...data },
};

export default settings;
