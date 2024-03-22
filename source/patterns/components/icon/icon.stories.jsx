import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import icon from './icon.twig';
import data from './icon.yml';

const settings = {
  title: 'Components/Icon',
};

export const Icon = {
  name: 'Icon',
  render: (args) => parse(icon(args)),
  args: { ...data },
};

export const Round = {
  ...Icon,
  name: 'Round icon',
  args: {
    ...data,
    modifier: 'radius-round',
  },
};

export const Square = {
  ...Icon,
  name: 'Square icon',
  args: {
    ...data,
    modifier: 'radius-square',
  },
};

export const IconWithTitle = {
  ...Icon,
  name: 'Icon with title',
  args: {
    ...data,
    url: 'https://medschool.ucla.edu',
    modifier: 'radius-square',
    title: 'This is an icon with title',
    teaser: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.'
  },
};

export const SantaBarbaraSand = {
  ...Icon,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
  args: {
    ...data,
    url: 'https://medschool.ucla.edu',
    modifier: 'radius-round',
    title: 'This is an icon with title',
    teaser: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.'
  },
};

export const VeniceCanal = {
  ...Icon,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
  args: {
    ...data,
    url: 'https://medschool.ucla.edu',
    modifier: 'radius-square',
    title: 'This is an icon with title',
    teaser: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui.'
  },
};

export default settings;
