import parse from 'html-react-parser';

import markup from './title.twig';
import data from './title.yml';

const settings = {
  title: 'Elements/Title',
  tags: ['autodocs'],
  args: { ...data },
};

// Plain text title story.
const Title = {
  render: (args) => parse(markup(args)),
  args: { ...data },
};

// Linked title story.
const Linked = {
  name: 'Title as a link',
  ...Title,
  args: {
    ...Title.args,
    url: 'https://medschool.ucla.edu',
  },
};

export default settings;
export { Title, Linked };
