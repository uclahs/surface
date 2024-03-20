import parse from 'html-react-parser';

// Imports decorator to add background color to the light version of the badge.
import { withBackground } from '../../../../.storybook/decorators';

import badge from './date-badge.twig';
import data from './date-badge.yml';

const settings = {
  title: 'Elements/Date Badge',
  render: (args) => parse(badge(args)),
  args: { ...data },
};

export const Badge = {
  name: 'Date badge',
};

export const BadgeLight = {
  name: 'Light date badge',
  args: {
    ...data,
    modifier: 'date-badge--light',
  },
  decorators: [withBackground],
};

export default settings;
