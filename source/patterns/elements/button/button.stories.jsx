import button from './button.twig';
import data from './button.yml';

const settings = {
  title: 'Elements/Button',
};

// Default button story.
export const Button = {
  render: (args) => button(args),
  args: { ...data },
};

/** Primary button story */
export const Primary = {
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

export const Secondary = {
  ...Button,
  name: 'Secondary button',
  args: {
    ...Button.args,
    button: {
      modifier: 'button--secondary',
      text: 'Secondary button',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export const Outlined = {
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

export const WithIcon = {
  ...Button,
  name: 'Button with Icon',
  args: {
    ...Button.args,
    button: {
      icon: 'fa-solid fa-arrow-right fa-sm',
      modifier: 'button--primary',
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
      icon: 'fa-solid fa-arrow-right fa-sm',
      modifier: 'button--link',
      text: 'Button as a link',
      url: 'https://medschool.ucla.edu',
    },
  },
};

export default settings;
