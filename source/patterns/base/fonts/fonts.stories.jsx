import fonts from './fonts.twig';
import data from './fonts.yml';

const settings = {
  title: 'Base/Fonts',
};

const Fonts = {
  name: 'Fonts',
  render: (args) => fonts(args),
  args: { ...data },
};

export default settings;
export { Fonts };
