import parse from 'html-react-parser';

import readtime from './readtime.twig';
import data from './readtime.yml';

const settings = {
  title: 'Elements/Readtime',
};

// Plain text title story.
export const Readtime = {
  name: 'Readtime',
  render: (args) => parse(readtime(args)),
  args: { ...data },
};

export default settings;
