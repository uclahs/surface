import parse from 'html-react-parser';

import tables from './tables.twig';
import data from './tables.yml';

const settings = {
  title: 'Elements/Tables',
};

export const Base = {
  name: 'Base table',
  render: (args) => parse(tables(args)),
  args: { ...data },
};

export const PrimaryTable = {
  name: 'Primary table',
  render: (args) => parse(tables(args)),
  args: {
    ...data,
    modifier: 'table--primary',
  },
};

export const StrippedTable = {
  name: 'Stripped table',
  render: (args) => parse(tables(args)),
  args: {
    ...data,
    modifier: 'table--primary table--striped',
  },
};

export const NoBorder = {
  name: 'Table without border',
  render: (args) => parse(tables(args)),
  args: {
    ...data,
    modifier: 'table--hover',
  },
};

export default settings;
