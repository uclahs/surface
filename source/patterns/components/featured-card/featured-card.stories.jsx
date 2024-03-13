import parse from 'html-react-parser';

import featuredCard from './featured-card.twig';
import dataEvent from './featured-card.yml';

// Data fields between events and articles vary a little and for this reason
// I am creating a second yml file for the article card specifically while
// still rendering the component with the same markup from twig.
import dataArticle from './featured-card-article.yml';

const settings = {
  title: 'Components/Featured Card',
  tags: ['autodocs'],
  args: { ...dataEvent },
  render: (args) => parse(featuredCard(args)),
};

const Default = {
  name: 'Featured Event',
  args: { ...dataEvent },
};

const Article = {
  name: 'Featured Article',
  args: { ...dataArticle },
  render: (args) => parse(featuredCard(args)),
};

export default settings;
export { Default, Article };
