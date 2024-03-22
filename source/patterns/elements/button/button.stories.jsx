import parse from 'html-react-parser';

import button from './button.twig';
import data from './button.yml';
import './button.css';

const settings = {
  title: 'Elements/Button',
};

// Default button story.
export const Button = {
  render: (args) => parse(button(args)),
  args: { ...data },
};

/** Primary button story */
export const Primary = {
  ...Button,
  name: 'Primary button',
  args: {
    ...Button.args,
    button: {
      icon: false,
      modifier: 'button--primary',
      text: 'Primary button',
    },
  },
};

export const Secondary = {
  ...Button,
  name: 'Secondary button',
  args: {
    ...Button.args,
    button: {
      icon: false,
      modifier: 'button--secondary',
      text: 'Secondary button',
    },
  },
};

export const Outlined = {
  ...Button,
  name: 'Outlined button',
  args: {
    ...Button.args,
    button: {
      icon: false,
      modifier: 'button--outlined',
      text: 'Outlined button',
    },
  },
};

export const withIcon = {
  ...Button,
  name: 'Button with Icon',
  args: {
    ...Button.args,
    button: {
      icon: true,
      modifier: 'button--outlined',
      text: 'Button with Icon',
    },
  },
};

export const Link = {
  ...Button,
  name: 'Button as a link',
  args: {
    ...Button.args,
    button: {
      icon: true,
      modifier: 'button--link',
      text: 'Button as a link',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
