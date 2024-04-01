import parse from 'html-react-parser';

import header from './page-header.twig';
import data from './page-header.yml';

const settings = {
  title: 'Collections/Page header',
};

export const Header = {
  name: 'Page header',
  render: (args) => parse(header(args)),
  args: { ...data },
};

export const HeaderBanner = {
  name: 'Page header with banner',
  render: (args) => parse(header(args)),
  args: {
    ...data,
    modifier: 'page-header--banner',
  },
};

export default settings;
