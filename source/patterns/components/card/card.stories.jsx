import parse from 'html-react-parser';

// TODO: Compile all components' styles into a single stylesheet
// to ensure all styles are available on any component.  This is only for
// Storybook purposes.
import '../../elements/button/button.css';
import '../../elements/date/date.css';
import '../../elements/date-badge/date-badge.css';
import '../../elements/eyebrow/eyebrow.css';
import '../../elements/readtime/readtime.css';

import card from './card.twig';
import data from './card.yml';
import './card.css';

const settings = {
  title: 'Components/Card',
  tags: ['autodocs'],
  // Adding args here so they are available to all the stories.
  args: { ...data },
};

const Default = {
  render: args => parse(card(args)),
  args: { ...data },
};

export default settings;
export { Default };
