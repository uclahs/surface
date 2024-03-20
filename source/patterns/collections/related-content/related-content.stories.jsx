import parse from 'html-react-parser';

import related from './related-content.twig';
import data from './related-content.yml';
import eventsData from './related-content-events.yml';

const settings = {
  title: 'Collections/Related content',
};

export const RelatedArticles = {
  name: 'Related Articles',
  render: (args) => parse(related(args)),
  args: { ...data },
};

export const RelatedEvents = {
  ...RelatedArticles,
  name: 'Related Events',
  args: { ...eventsData },
};

export default settings;
