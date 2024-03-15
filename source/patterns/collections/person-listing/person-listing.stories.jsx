import parse from 'html-react-parser';

import person from './person-listing.twig';
import data from './person-listing.yml';

const settings = {
  title: 'Collections/Person listing',
  render: (args) => parse(person(args)),
  args: { ...data },
};

const List = {
  name: 'Person listing',
  args: { ...data },
};

export default settings;
export { List };
