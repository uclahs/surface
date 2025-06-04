import quote from './quote.twig';
import data from './quote.yml';

const settings = {
  title: 'Components/Quote',
};

export const MediaQuote = {
  render: (args) => quote(args),
  args: { ...data },
};

export const Quote = {
  ...MediaQuote,
  render: (args) => quote(args),
  args: {
    ...data,
    image: '',
  },
};

export default settings;
