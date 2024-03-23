import parse from 'html-react-parser';

import footer from './site-footer.twig';
import data from './site-footer.yml';
import './site-footer.css';

const settings = {
  title: 'Layouts/Site footer',
};

export const SiteFooter = {
  name: 'Site footer',
  render: (args) => parse(footer(args)),
  args: { ...data },
};

export default settings;
