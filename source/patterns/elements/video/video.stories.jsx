import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import video from './video.twig';
import data from './video.yml';

const settings = {
  title: 'Elements/Video',
};

const Video = {
  name: 'Video',
  render: (args) => parse(video(args)),
  args: { ...data },
};

const SantaBarbaraSand = {
  ...Video,
  name: 'With Santa Barbara Sand Background',
  decorators: [ SantaBarbaraSandBg ],
};

const VeniceCanal = {
  ...Video,
  name: 'With Venice Canal Background',
  decorators: [ VeniceCanalBg ],
};

export default settings;
export { Video, SantaBarbaraSand, VeniceCanal };
