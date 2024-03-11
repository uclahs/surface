import parse from 'html-react-parser';

import date from './date.twig';
import data from './date.yml';

const settings = {
  title: 'Elements/Date',
  tags: ['autodocs'],
  args: { ...data },
};

// Plain text title story.
const Date = {
  render: (args) => parse(date(args)),
  args: { ...data },
};

export default settings;
export { Date };
