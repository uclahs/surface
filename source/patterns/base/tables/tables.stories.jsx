import parse from 'html-react-parser';

import tables from './tables.twig';
import data from './tables.yml';

const settings = {
  title: 'Base/Tables',
};

const Tables = {
  name: 'Tables',
  render: (args) => parse(tables(args)),
  args: { ...data },
};

export default settings;
export { Tables };
