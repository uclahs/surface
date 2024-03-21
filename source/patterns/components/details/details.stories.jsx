import parse from 'html-react-parser';

import details from './details.twig';
import data from './details.yml';

const settings = {
  title: 'Components/Details',
};

export const Details = {
  name: 'Details',
  render: (args) => parse(details(args)),
  args: { ...data },
};

export const DropdownButton = {
  ...Details,
  name: 'Details with dropdown button',
  args: {
    ...data,
    modifier: 'details--dropbutton',
    title: 'Dropdown button',
    errors: '',
    description: '',
  },
};

export default settings;
