// Imports decorator to add background color to the light version of the badge.
import { withBackground } from '../../../../.storybook/decorators';

import badge from './date-badge.twig';
import data from './date-badge.yml';

const settings = {
  title: 'Elements/Date Badge',
  parameters: {
    controls: {
      include: ['month', 'day'],
    },
  },
};

export const Badge = {
  name: 'Date badge',
  render: (args) => badge(args),
  args: { ...data },
};

export const BadgeSmall = {
  name: 'Date badge',
  render: (args) => badge(args),
  args: {
    ...data,
    modifier: 'date-badge--small',
  },
};

export const BadgeLight = {
  ...Badge,
  name: 'Light date badge',
  args: {
    ...data,
    modifier: 'date-badge--light',
  },
  decorators: [withBackground],
};

export default settings;
