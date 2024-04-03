import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import hero from './hero.twig';
import data from './hero.yml';
import video from './hero-video.yml';
// import '../../theme/glightbox/glightbox';

const settings = {
  title: 'Collections/Hero',
};

export const HeroDefault = {
  name: 'Hero',
  render: (args) => parse(hero(args)),
  args: { ...data },
};

export const HeroWithVideo = {
  ...HeroDefault,
  name: 'Hero with video',
  args: {
    ...video,
    modifier: 'hero--video',
  },
};

export const SantaBarbaraSand = {
  ...HeroDefault,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...HeroDefault,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
