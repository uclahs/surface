import parse from 'html-react-parser';

import search from './search-results.twig';
import data from './search-results.yml';

const settings = {
  title: 'Components/Search results',
};

export const SearchResults = {
  name: 'Search results',
  render: (args) => parse(search(args)),
  args: { ...data },
};

export default settings;
