import parse from 'html-react-parser';

import text from './text.twig';
import data from './text.yml';

const settings = {
  title: 'Elements/Text',
};

export const Text = {
  name: 'Text',
  render: (args) => parse(text(args)),
  args: { ...data },
};

export default settings;
