import parse from 'html-react-parser';

import shadows from './shadows.twig';

const settings = {
  title: 'Base/Shadows',
};

const Shadows = {
  name: 'Shadows',
  render: (args) => parse(shadows(args)),
};

export default settings;
export { Shadows };
