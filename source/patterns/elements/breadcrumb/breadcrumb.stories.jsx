import parse from 'html-react-parser';

import breadcrumb from './breadcrumb.twig';
import data from './breadcrumb.yml';

const settings = {
  title: 'Elements/Breadcrumb',
};

export const Breadcrumb = {
  name: 'Breadcrumb',
  render: (args) => parse(breadcrumb(args)),
  args: { ...data },
};

export default settings;
