import parse from 'html-react-parser';

import sizes from './sizes.twig';

const settings = {
  title: 'Base/Sizes',
};

const Sizes = {
  name: 'Sizes',
  render: (args) => parse(sizes(args)),
};

export default settings;
export { Sizes };
