import parse from 'html-react-parser';

import pager from './pager.twig';
import data from './pager.yml';

const settings = {
  title: 'Elements/Pager',
};

export const Pager = {
  name: 'Pager',
  render: (args) => parse(pager(args)),
  args: { ...data },
};

export default settings;
