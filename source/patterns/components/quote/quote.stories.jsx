import parse from 'html-react-parser';

import quote from './quote.twig';
import data from './quote.yml';

const settings = {
  title: 'Components/Quote',
};

export const Quote = {
  name: 'Quote',
  render: (args) => parse(quote(args)),
  args: { ...data },
};

export default settings;
