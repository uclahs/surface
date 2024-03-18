import parse from 'html-react-parser';

import tables from './tables.twig';
import data from './tables.yml';

const settings = {
  title: 'Base/Tables',
};

const Base = {
  name: 'Base',
  render: (args) => parse(tables(args)),
  args: { ...data },
};

const Primary = {
  name: 'Table Primary',
  render: (args) => parse(tables(args)),
  args: {
    ...data,
    modifier: 'table--primary',
  },
};

const Borderless = {
  name: 'Table without border',
  render: (args) => parse(tables(args)),
  args: {
    ...data,
    modifier: 'table--hover',
  },
};

export default settings;
export { Base, Primary, Borderless };
