import parse from 'html-react-parser';

import card from './event-card.twig';
import data from './event-card.yml';

const settings = {
  title: 'Components/Event list card',
};

export const Card = {
  name: 'Event list card',
  render: (args) => parse(card(args)),
  args: { ...data },
};

export default settings;
