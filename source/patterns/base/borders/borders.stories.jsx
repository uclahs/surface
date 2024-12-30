import borders from './borders.twig';

const settings = {
  title: 'Base/Borders',
};

const Borders = {
  name: 'Borders',
  render: (args) => borders(args),
};

export default settings;
export { Borders };
