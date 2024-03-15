import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import cta from './call-to-action.twig';
import data from './call-to-action.yml';

const settings = {
  title: 'Components/Call to action',
  args: { ...data },
  render: (args) => parse(cta(args)),
};

const CTA = {
  name: 'Call to action',
  args: { ...data },
};

const Light = {
  ...CTA,
  name: 'CTA with Santa Barbara Sand Background',
  args: { ...data },
  decorators: [SantaBarbaraSandBg],
};

const Dark = {
  ...CTA,
  name: 'CTA with Venice Canal background',
  args: { ...data },
  decorators: [VeniceCanalBg],
};

export default settings;
export { CTA, Light, Dark };
