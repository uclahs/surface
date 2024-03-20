import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import cta from './call-to-action.twig';
import data from './call-to-action.yml';

const settings = {
  title: 'Components/Call to action',
};

export const CTA = {
  name: 'Call to action',
  render: (args) => parse(cta(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...CTA,
  name: 'With Santa Barbara Sand background',
  args: { ...data },
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...CTA,
  name: 'With Venice Canal background',
  args: { ...data },
  decorators: [VeniceCanalBg],
};

export default settings;
