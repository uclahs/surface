import parse from 'html-react-parser';

import button from './button.twig';
import data from './button.yml';
import './button.css';

const settings = {
  title: 'Elements/Button',
  tags: ['autodocs'],
  // Adding args here so they are available to all the stories.
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
    modifier: 'button--primary',
    text: 'Primary button',
  },
};


const Secondary = {
  ...Button,
  name: 'Secondary button',
  args: {
    ...Button.args,
    modifier: 'button--secondary',
    text: 'Secondary button',
  },
};

const Outlined = {
  ...Button,
  name: 'Outlined button',
  args: {
    ...Button.args,
    modifier: 'button--outlined',
    text: 'Outlined button',
  },
};

const Link = {
  ...Button,
  name: 'Link button',
  args: {
    ...Button.args,
    modifier: 'button--link',
    text: 'Link button',
    url: 'https://medschool.ucla.edu',
  },
};

export default settings;
export { Button, Primary, Secondary, Outlined, Link };
