import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import carousel from './carousel.twig';
import data from './carousel.yml';
import './glide.min';
import './carousel';

const settings = {
  title: 'Collections/Carousel',
};

export const CarouselComponent = {
  name: 'Carousel',
  render: (args) => parse(carousel(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...CarouselComponent,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...CarouselComponent,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
