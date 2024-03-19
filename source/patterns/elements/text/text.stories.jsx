import parse from 'html-react-parser';

import text from './text.twig';
import data from './text.yml';

const settings = {
  title: 'Elements/Text',
  render: (args) => parse(text(args)),
  args: { ...data },
};

const Text = {
  name: 'Text',
};

export default settings;
export { Text  };
