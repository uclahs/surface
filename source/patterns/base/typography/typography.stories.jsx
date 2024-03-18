import parse from 'html-react-parser';

import typography from './typography.twig';

const settings = {
  title: 'Base/Typography',
};

const Typography = {
  name: 'Typography',
  render: (args) => parse(typography(args)),
};

export default settings;
export { Typography };
