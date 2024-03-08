import parse from 'html-react-parser';

import eyebrow from './eyebrow.twig';
import data from './eyebrow.yml';

const settings = {
  title: 'Elements/Eyebrow',
  tags: ['autodocs'],
  args: { ...data },
};

// Plain text title story.
const Eyebrow = {
  render: (args) => parse(eyebrow(args)),
  args: { ...data },
};

export default settings;
export { Eyebrow };
