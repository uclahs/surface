import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators.jsx';

import callout from './callout.twig';
import data from './callout.yml';

const settings = {
  title: 'Components/Callout',
  args: { ...data },
  render: (args) => parse(callout(args)),
};

const Default = {
  name: 'Callout',
  args: { ...data },
};

const Horizontal = {
  ...Default,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-horizontal',
  },
};

const Reversed = {
  ...Default,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-horizontal is-reversed',
  },
};

const Quote = {
  ...Default,
  name: 'Callout Horizontal',
  args: {
    ...data,
    modifier: 'is-quote',
  },
};

const SantaBarbaraSandBackground = {
  name: 'Callout with Santa Barbara Sand Background',
  args: { ...data },
  decorators: [SantaBarbaraSandBg],
};

const VeniceCanalBackground = {
  name: 'Callout with Venice Canal Background',
  args: { ...data },
  decorators: [VeniceCanalBg],
};

export default settings;
export { Default, Horizontal, Reversed, Quote, SantaBarbaraSandBackground, VeniceCanalBackground };
