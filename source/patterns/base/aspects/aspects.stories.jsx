import parse from 'html-react-parser';

import aspects from './aspects.twig';

const settings = {
  title: 'Base/Aspects',
};

const Aspects = {
  name: 'Aspect ratios',
  render: (args) => parse(aspects(args)),
};

export default settings;
export { Aspects };
