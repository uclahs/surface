import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import slider from './slider.twig';
import data from './slider.yml';
import '../carousel/glide.min';
import './slider';

const settings = {
  title: 'Collections/Slider',
};

export const SliderItem = {
  name: 'Slider',
  render: (args) => parse(slider(args)),
  args: { ...data },
};

export const SliderButtonOnTop = {
  name: 'Slider with Button on top',
  render: (args) => parse(slider(args)),
  args: {
    ...data,
    button_placement: 'is-top'
  },
};

export const SantaBarbaraSand = {
  ...SliderItem,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...SliderItem,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
