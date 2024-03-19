import parse from 'html-react-parser';

import links from './links.twig';
import data from './links.yml';

const settings = {
  title: 'Elements/Links',
  render: (args) => parse(links(args)),
  args: { ...data },
};

const Links = {
  name: 'Links',
};

const DropButton = {
  name: 'Links Dropbutton',
  args: {
    ...data,
    modifier: 'links--dropbutton',
  },
};

const LinksWithTitle = {
  name: 'Links with Title',
  args: {
    ...data,
    heading: { text: 'Links with title'},
  },
};

export default settings;
export { Links, DropButton, LinksWithTitle  };
