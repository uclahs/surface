import parse from 'html-react-parser';

import links from './links.twig';
import data from './links.yml';

const settings = {
  title: 'Elements/Links',
};

export const Links = {
  name: 'Links',
  render: (args) => parse(links(args)),
  args: { ...data },
};

export const DropButton = {
  name: 'Links drop button',
  render: (args) => parse(links(args)),
  args: {
    ...data,
    modifier: 'links--dropbutton',
  },
};

export const LinksWithTitle = {
  name: 'Links with Title',
  render: (args) => parse(links(args)),
  args: {
    ...data,
    heading: { text: 'Links with title'},
  },
};

export default settings;
