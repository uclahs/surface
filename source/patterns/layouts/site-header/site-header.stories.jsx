import parse from 'html-react-parser';

import header from './site-header.twig';
import data from './site-header.yml';

const settings = {
  title: 'Layouts/Site Header',
};

export const Stacked = {
  name: 'Site header',
  render: (args) => parse(header(args)),
  args: { ...data },
};

export default settings;
