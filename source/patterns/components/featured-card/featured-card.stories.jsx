import featuredCard from './featured-card.twig';
import dataEvent from './featured-card.yml';

// Data fields between events and articles vary a little and for this reason
// I am creating a second yml file for the article card specifically while
// still rendering the component with the same markup from twig.
import dataArticle from './featured-card-article.yml';

const settings = {
  title: 'Components/Featured Card',
};

export const FeaturedArticle = {
  name: 'Featured Article',
  render: (args) => featuredCard(args),
  args: { ...dataArticle },
};

export const FeaturedEvent = {
  name: 'Featured Event',
  render: (args) => featuredCard(args),
  args: { ...dataEvent },
};

export default settings;
