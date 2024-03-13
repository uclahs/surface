import parse from 'html-react-parser';

import button from './button.twig';
import data from './button.yml';
import './button.css';

const settings = {
  title: 'Elements/Button',
  tags: ['autodocs'],
  args: { ...data },
};

// Default button story.
const Button = {
  render: (args) => parse(button(args)),
  args: { ...data },
};

/** Primary button story */
const Primary = {
  ...Button,
  name: 'Primary button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--primary',
      text: 'Primary button',
    },
  },
};

const Secondary = {
  ...Button,
  name: 'Secondary button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--secondary',
      text: 'Secondary button',
    },
  },
};

const Outlined = {
  ...Button,
  name: 'Outlined button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--outlined',
      text: 'Outlined button',
    },
  },
};

const withIcon = {
  ...Button,
  name: 'Button with Icon',
  args: {
    ...Button.args,
    button: {
      icon: 'arrow-right',
      modifier: 'button--outlined',
      text: 'Button with Icon',
    },
  },
};

const Link = {
  ...Button,
  name: 'Link button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--link',
      text: 'Button as a link',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
export { Button, Primary, Secondary, Outlined, withIcon, Link };
