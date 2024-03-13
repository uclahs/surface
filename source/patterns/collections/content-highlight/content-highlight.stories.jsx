import parse from 'html-react-parser';

import highlight from './content-highlight.twig';
import data from './content-highlight.yml';

// Data fields between events and articles vary a little and for this reason
// I am creating a second yml file for the Article Highlight specifically
// while still rendering the component with the same markup from twig.
import dataArticle from './content-highlight-article.yml';

const settings = {
  title: 'Collections/Content Highlight',
  tags: ['autodocs'],
  args: { ...data },
  render: args => parse(highlight(args)),
};

const Events = {
  name: 'Event Highlight',
  args: { ...data },
};

const Articles = {
  name: 'Article Highlight',
  args: { ...dataArticle },
  render: args => parse(highlight(args)),
};

export default settings;
export { Articles, Events };
