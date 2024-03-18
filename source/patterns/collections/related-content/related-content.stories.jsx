import parse from 'html-react-parser';

import related from './related-content.twig';
import data from './related-content.yml';
import eventsData from './related-content-events.yml';

const settings = {
  title: 'Collections/Related content',
  render: (args) => parse(related(args)),
  args: { ...data },
};

const Articles = {
  name: 'Related content',
  args: { ...data },
};

const Events = {
  ...Articles,
  name: 'Related content',
  args: { ...eventsData },
};

export default settings;
export { Articles, Events };
