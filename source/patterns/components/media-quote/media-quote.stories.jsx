import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

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

const SantaBarbaraSand = {
  name: 'With Santa Barbara Sand Background',
  args: { ...data },
  decorators: [SantaBarbaraSandBg],
};

const VeniceCanal = {
  name: 'With Venice Canal Background',
  args: { ...data },
  decorators: [VeniceCanalBg],
};

export default settings;
export { Quote, SantaBarbaraSand, VeniceCanal };
