import parse from 'html-react-parser';

import colors from './colors.twig';
import data from './colors.yml';

const settings = {
  title: 'Base/Colors',
};

const Colors = {
  name: 'Colors',
  render: (args) => parse(colors(args)),
  args: { ...data },
};

export default settings;
export { Colors };
