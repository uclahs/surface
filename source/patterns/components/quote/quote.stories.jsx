// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

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

export const QuoteSantaBarbaraSand = {
  ...MediaQuote,
  name: 'Quote with Santa Barbara Sand background',
  render: (args) => quote(args),
  args: {
    ...data,
    image: '',
  },
  decorators: [SantaBarbaraSandBg],
};

export const QuoteVeniceCanal = {
  ...MediaQuote,
  name: 'Quote with Santa Barbara Sand background',
  render: (args) => quote(args),
  args: {
    ...data,
    image: '',
  },
  decorators: [VeniceCanalBg],
};

export const SantaBarbaraSand = {
  ...MediaQuote,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...MediaQuote,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
