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
  args: {
    ...data,
    title: {
      level: 1,
      modifier: '',
      text: 'A vibrant, supportive culture is essential to advancing our mission to heal humankind.',
    }
  },
};

// Linked title story.
const Linked = {
  name: 'Title as a link',
  ...Title,
  args: {
    ...data,
    title: {
      level: 1,
      modifier: '',
      text: 'A vibrant, supportive culture is essential to advancing our mission to heal humankind.',
      url: 'https://medschool.ucla.edu',
    }
  },
};

export default settings;
export { Title, Linked };
