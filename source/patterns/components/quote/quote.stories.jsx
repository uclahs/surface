import parse from 'html-react-parser';

import quote from './quote.twig';
import data from './quote.yml';

const settings = {
  title: 'Components/Quote',
  args: { ...data },
  render: (args) => parse(quote(args)),
};

export const Quote = {
  name: 'Quote',
};


export default settings;
