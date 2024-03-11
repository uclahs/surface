import parse from 'html-react-parser';

import readtime from './readtime.twig';
import data from './readtime.yml';

const settings = {
  title: 'Elements/Readtime',
  tags: ['autodocs'],
  args: { ...data },
};

// Plain text title story.
const Readtime = {
  render: (args) => parse(readtime(args)),
  args: { ...data },
};

export default settings;
export { Readtime };
