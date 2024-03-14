import parse from 'html-react-parser';

import card from './person-card.twig';
import data from './person-card.yml';

const settings = {
  title: 'Components/Person card',
  args: { ...data },
  render: (args) => parse(card(args)),
};

const Default = {
  name: 'Person card',
  args: { ...data },
};

export default settings;
export { Default };
