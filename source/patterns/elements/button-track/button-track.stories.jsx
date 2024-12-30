

import button from './button-track.twig';
import data from './button-track.yml';

const settings = {
  title: 'Elements/Button track',
  parameters: {
    controls: {
      include: ['text'],
    },
  },
};

export const ButtonTrack = {
  render: (args) => button(args),
  args: { ...data },
};

export const ButtonTrackIcon = {
  render: (args) => button(args),
  name: 'Button with icon',
  args: {
    ...data,
    icon: 'fa-solid fa-arrow-right',
   },
};

export default settings;
