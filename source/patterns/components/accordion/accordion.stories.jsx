import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import accordion from './accordion.twig';
import data from './accordion.yml';

const settings = {
  title: 'Components/Accordion',
};

const Accordion = {
  name: 'Accordion',
  render: (args) => parse(accordion(args)),
  args: { ...data },
};

const SantaBarbaraSand = {
  ...Accordion,
  name: 'With Santa Barbara Sand Background',
  decorators: [SantaBarbaraSandBg],
};

const VeniceCanal = {
  ...Accordion,
  name: 'With Venice Canal Background',
  decorators: [VeniceCanalBg],
};

export default settings;
export { Accordion, SantaBarbaraSand, VeniceCanal };
