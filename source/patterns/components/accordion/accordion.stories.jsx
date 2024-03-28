import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import accordion from './accordion.twig';
import data from './accordion.yml';
import './accordion';

const settings = {
  title: 'Components/Accordion',
};

export const Accordion = {
  name: 'Accordion',
  render: (args) => parse(accordion(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...Accordion,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...Accordion,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
