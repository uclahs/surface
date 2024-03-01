import parse from 'html-react-parser';

import twigTemplate from './button.twig';
import data from './button.yml';
import './button.css';

const settings = {
  title: 'Examples/Button',
};

const Button = {
  render: (args) => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Button };
