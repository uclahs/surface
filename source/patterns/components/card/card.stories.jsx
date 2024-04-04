import parse from 'html-react-parser';

import card from './card.twig';
import data from './card.yml';

const settings = {
  title: 'Components/Card',
};

export const EventCard = {
  name: 'Event card',
  render: (args) => parse(card(args)),
  args: { ...data },
};

export const ArticleCard = {
  ...EventCard,
  name: 'Article card',
  args: {
    ...data,
    date: 'October 31, 2024',
    event_type: '',
    more_dates: false,
    short_date_month: '',
    organization: '',
    readtime: '5 min read'
  },
};

export default settings;
