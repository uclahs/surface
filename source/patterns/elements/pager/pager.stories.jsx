import parse from 'html-react-parser';

import pager from './pager.twig';
import data from './pager.yml';

const settings = {
  title: 'Elements/Pager',
  render: (args) => parse(pager(args)),
  args: { ...data },
};

const Pager = {
  name: 'Pager',
};

export default settings;
export { Pager  };
