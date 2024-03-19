import parse from 'html-react-parser';

import { withDarkMode } from '../../../../.storybook/decorators';
import badge from './date-badge.twig';
import data from './date-badge.yml';

const settings = {
  title: 'Elements/Date Badge',
  tags: ['autodocs'],
  args: { ...data },
};

const Badge = {
  render: (args) => parse(badge(args)),
  args: { ...data },
};

const BadgeLight = {
  render: (args) => parse(badge(args)),
  args: {
    ...data,
    modifier: 'date-badge--light',
  },
  decorators: [withDarkMode],
};

export default settings;
export { Badge, BadgeLight };
