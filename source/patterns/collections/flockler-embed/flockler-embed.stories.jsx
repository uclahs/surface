import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

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

export const SantaBarbaraSand = {
  ...FlocklerEmbed,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...FlocklerEmbed,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
