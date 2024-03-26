import parse from 'html-react-parser';

import sidebar from './menu-sidebar.twig';
import data from './menu-sidebar.yml';

const settings = {
  title: 'Components/Menu sidebar',
};

export const Stacked = {
  name: 'Menu sidebar',
  render: (args) => parse(sidebar(args)),
  args: { ...data },
};

export default settings;
