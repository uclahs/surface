import parse from 'html-react-parser';

import fonts from './fonts.twig';
import data from './fonts.yml';

const settings = {
  title: 'Base/Fonts',
};

const Fonts = {
  name: 'Fonts',
  render: (args) => parse(fonts(args)),
  args: { ...data },
};

export default settings;
export { Fonts };
