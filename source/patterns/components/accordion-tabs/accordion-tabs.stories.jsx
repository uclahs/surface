import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import tabs from './accordion-tabs.twig';
import data from './accordion-tabs.yml';
/* eslint import/no-unresolved: "off" */
/* eslint import/extensions: "off" */
import 'https://cdn.jsdelivr.net/npm/a11y-accordion-tabs@1.0.2/a11y-accordion-tabs.min.js';

const settings = {
  title: 'Components/Accordion tabs',
};

const AccordionTabs = {
  name: 'Accordion tabs',
  render: (args) => parse(tabs(args)),
  args: { ...data },
};

const SantaBarbaraSand = {
  ...AccordionTabs,
  name: 'With Santa Barbara Sand Background',
  decorators: [SantaBarbaraSandBg],
};

const VeniceCanal = {
  ...AccordionTabs,
  name: 'With Venice Canal Background',
  decorators: [VeniceCanalBg],
};

export default settings;
export { AccordionTabs, SantaBarbaraSand, VeniceCanal };
