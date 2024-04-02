import parse from 'html-react-parser';

import person from './person-listing.twig';
import data from './person-listing.yml';

const settings = {
  title: 'Collections/Person listing',
};

export const PersonListing = {
  name: 'Person listing',
  render: (args) => parse(person(args)),
  args: { ...data },
};

export default settings;
