import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import quote from './media-quote.twig';
import data from './media-quote.yml';

const settings = {
  title: 'Components/Media quote',
};

export const Quote = {
  name: 'Media quote',
  render: (args) => parse(quote(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...Quote,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...Quote,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
