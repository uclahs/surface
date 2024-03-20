import parse from 'html-react-parser';

import card from './event-card.twig';
import data from './event-card.yml';

const settings = {
  title: 'Components/Event list card',
  args: { ...data },
  render: (args) => parse(card(args)),
};

export const Card = {
  name: 'Event list card',
};

export default settings;
