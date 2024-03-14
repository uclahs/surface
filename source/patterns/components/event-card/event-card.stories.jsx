import parse from 'html-react-parser';

import card from './event-card.twig';
import data from './event-card.yml';

const settings = {
  title: 'Components/Event card',
  args: { ...data },
  render: (args) => parse(card(args)),
};

const Card = {
  name: 'Event Card',
  args: { ...data },
};

export default settings;
export { Card };
