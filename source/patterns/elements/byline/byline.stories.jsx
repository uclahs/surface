import parse from 'html-react-parser';

import byline from './byline.twig';
import data from './byline.yml';

const settings = {
  title: 'Elements/Byline',
  render: (args) => parse(byline(args)),
  args: { ...data },
};

const Byline = {
  name: 'Byline',
};

export default settings;
export { Byline  };
