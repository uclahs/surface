import parse from 'html-react-parser';

import byline from './byline.twig';
import data from './byline.yml';

const settings = {
  title: 'Elements/Byline',
};

export const Byline = {
  name: 'Byline',
  render: (args) => parse(byline(args)),
  args: { ...data },
};

export default settings;
