import parse from 'html-react-parser';

import event from './event-listing.twig';
import data from './event-listing.yml';

const settings = {
  title: 'Collections/Event listing',
};

export const EventListing = {
  name: 'Event listing',
  render: (args) => parse(event(args)),
  args: { ...data },
};

export default settings;
