import parse from 'html-react-parser';
import React from 'react';

import badge from './date-badge.twig';
import data from './date-badge.yml';
import './date-badge.css';

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
  decorators: [
    (BadgeLight) => (
      <div style={{ background: '#2874af', padding: '40px' }}>
        <BadgeLight />
      </div>
    ),
  ],
};

export default settings;
export { Badge, BadgeLight };
