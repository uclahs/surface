import sizes from './sizes.twig';
import data from './sizes.yml';

const settings = {
  title: 'Base/Sizes',
  args: { ...data },
};

const Sizes = {
  name: 'Sizes',
  render: (args) => sizes(args),
  args: { ...data },
};

export default settings;
export { Sizes };
