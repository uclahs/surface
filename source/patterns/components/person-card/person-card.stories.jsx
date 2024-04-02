import parse from 'html-react-parser';

import card from './person-card.twig';
import data from './person-card.yml';

const settings = {
  title: 'Components/Person card',
};

export const PersonCard = {
  name: 'Person card',
  render: (args) => parse(card(args)),
  args: { ...data },
};

export default settings;
