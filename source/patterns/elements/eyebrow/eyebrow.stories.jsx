import eyebrow from './eyebrow.twig';
import data from './eyebrow.yml';

const settings = {
  title: 'Elements/Eyebrow',
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Eyebrow = {
  name: 'Plain text label',
  render: (args) => eyebrow(args),
  args: {
    ...data,
    eyebrow: {
      modifier: '',
      text: 'This is a plain text label',
      url: '',
    },
  },
};

export const Linked = {
  name: 'Label as a link',
  render: (args) => eyebrow(args),
  args: {
    ...data,
    eyebrow: {
      modifier: 'some-class',
      text: 'This is a label as a link',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
