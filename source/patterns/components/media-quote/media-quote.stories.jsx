import parse from 'html-react-parser';

import quote from './media-quote.twig';
import data from './media-quote.yml';

const settings = {
  title: 'Components/Media quote',
  args: { ...data },
  render: (args) => parse(quote(args)),
};

const Quote = {
  name: 'Media quote',
  args: { ...data },
};


export default settings;
export { Quote };
