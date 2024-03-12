import parse from 'html-react-parser';

import highlight from './content-highlight.twig';
import data from './content-highlight.yml';

// Data fields between events and articles vary a little and for this reason
// I am creating a second yml file for the article card specifically while
// still rendering the component with the same markup from twig.
// import dataArticle from './featured-card-article.yml';

const settings = {
  title: 'Collections/Content Highlight',
  tags: ['autodocs'],
  args: { ...data },
  render: args => parse(highlight(args)),
};

const Default = {
  name: 'Event Highlight',
  args: { ...data },
};

export default settings;
export { Default };
