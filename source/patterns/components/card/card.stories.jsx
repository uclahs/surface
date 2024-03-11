import parse from 'html-react-parser';

import card from './card.twig';
import data from './card.yml';

const settings = {
  title: 'Components/Card',
  tags: ['autodocs'],
  args: { ...data },
};

const Default = {
  name: 'Event card',
  render: args => parse(card(args)),
  args: { ...data },
};

const Article = {
  name: 'Article card',
  render: args => parse(card(args)),
  args: {
    ...data,
    event_type: '',
    more_dates: false,
    short_date_month: '',
    organization: '',
  },
};

export default settings;
export { Default, Article };
