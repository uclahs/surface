import parse from 'html-react-parser';

import brand from './brand.twig';
import data from './brand.yml';

const settings = {
  title: 'Base/Brand',
};

const Brand = {
  name: 'Brand colors',
  render: (args) => parse(brand(args)),
  args: { ...data },
};

export default settings;
export { Brand };
