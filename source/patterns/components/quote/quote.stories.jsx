import quote from './quote.twig';
import data from './quote.yml';

const settings = {
  title: 'Components/Quote',
};

export const MediaQuote = {
  name: 'Media Quote',
  render: (args) => quote(args),
  args: { ...data },
};

export const Quote = {
  ...MediaQuote,
  name: 'Quote',
  render: (args) => quote(args),
  args: {
    ...data,
    image: '',
  },
};

export default settings;
