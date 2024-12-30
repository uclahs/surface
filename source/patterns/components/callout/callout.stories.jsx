// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import callout from './callout.twig';
import data from './callout.yml';

const settings = {
  title: 'Components/Callout',
};

export const Stacked = {
  name: 'Callout',
  render: (args) => callout(args),
  args: { ...data },
};

export const Horizontal = {
  ...Stacked,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-horizontal',
  },
};

export const Reversed = {
  ...Stacked,
  name: 'Callout Horizontal Reversed',
  args: {
    ...data,
    modifier: 'is-horizontal is-reversed',
  },
};

export const Quote = {
  ...Stacked,
  name: 'Callout Quote',
  args: {
    ...data,
    modifier: 'is-quote',
  },
};

export const QuoteHorizontal = {
  ...Stacked,
  name: 'Callout Quote Horizontal',
  args: {
    ...data,
    modifier: 'is-quote is-horizontal',
  },
};

export const HorizontalReversed = {
  ...Stacked,
  name: 'Callout Quote Horizontal Reversed',
  args: {
    ...data,
    modifier: 'is-quote is-horizontal is-reversed',
  },
};

export const SantaBarbaraSand = {
  ...Stacked,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...Stacked,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
