import parse from 'html-react-parser';

import breadcrumb from './breadcrumb.twig';
import data from './breadcrumb.yml';

const settings = {
  title: 'Elements/Breadcrumb',
  render: (args) => parse(breadcrumb(args)),
  args: { ...data },
};

const Breadcrumb = {
  name: 'Breadcrumb',
  args: { ...data },
};

export default settings;
export { Breadcrumb  };
