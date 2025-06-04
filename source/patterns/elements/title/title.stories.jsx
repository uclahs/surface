import markup from './title.twig';
import data from './title.yml';

const settings = {
  title: 'Elements/Title',
};

// Plain text title story.
export const Title = {
  render: (args) => markup(args),
  args: {
    ...data,
    title: {
      level: 1,
      modifier: 'prose',
      text: 'A vibrant, supportive culture is essential to advancing our mission to heal humankind.',
    },
  },
};

// Linked title story.
export const Linked = {
  name: 'Title as a link',
  ...Title,
  args: {
    ...data,
    title: {
      level: 1,
      modifier: 'prose',
      text: 'A vibrant, supportive culture is essential to advancing our mission to heal humankind.',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
