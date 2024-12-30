import shadows from './shadows.twig';

const settings = {
  title: 'Base/Shadows',
};

const Shadows = {
  name: 'Shadows',
  render: (args) => shadows(args),
};

export default settings;
export { Shadows };
