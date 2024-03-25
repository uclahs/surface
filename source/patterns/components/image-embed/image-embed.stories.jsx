import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import image from './image-embed.twig';
import data from './image-embed.yml';

const settings = {
  title: 'Components/Image embed',
};

export const ImageEmbed = {
  name: 'Image embed',
  render: (args) => parse(image(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...ImageEmbed,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...ImageEmbed,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
