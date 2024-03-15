import parse from 'html-react-parser';

import borders from './borders.twig';

const settings = {
  title: 'Base/Borders',
};

const Borders = {
  name: 'Borders',
  render: (args) => parse(borders(args)),
};

export default settings;
export { Borders };
