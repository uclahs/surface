import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import video from './video.twig';
import data from './video.yml';

const settings = {
  title: 'Elements/Video',
};

export const Video = {
  name: 'Video',
  render: (args) => parse(video(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...Video,
  name: 'With Santa Barbara Sand background',
  decorators: [ SantaBarbaraSandBg ],
};

export const VeniceCanal = {
  ...Video,
  name: 'With Venice Canal background',
  decorators: [ VeniceCanalBg ],
};

export default settings;
