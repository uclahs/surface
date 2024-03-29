import parse from 'html-react-parser';

import typewriter from './typewriter.twig';
import data from './typewriter.yml';

const settings = {
  title: 'Components/Typewriter',
};

export const Stacked = {
  name: 'Typewriter',
  render: (args) => parse(typewriter(args)),
  args: { ...data },
};

export default settings;
