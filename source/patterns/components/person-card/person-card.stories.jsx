import parse from 'html-react-parser';

import card from './person-card.twig';
import data from './person-card.yml';

const settings = {
  title: 'Components/Person card',
  args: { ...data },
  render: (args) => parse(card(args)),
};

export const PersonCard = {
  name: 'Person card',
};

export default settings;
