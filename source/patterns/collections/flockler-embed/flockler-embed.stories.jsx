import parse from 'html-react-parser';

import flockler from './flockler-embed.twig';
import data from './flockler-embed.yml';

const settings = {
  title: 'Collections/Flockler embed',
};

export const FlocklerEmbed = {
  name: 'Flockler embed',
  render: (args) => parse(flockler(args)),
  args: { ...data },
};

export default settings;
