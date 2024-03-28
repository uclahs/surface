import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import tabs from './accordion-tabs.twig';
import data from './accordion-tabs.yml';
import './accordion-tabs';

const settings = {
  title: 'Components/Accordion tabs',
};

export const AccordionTabs = {
  name: 'Accordion tabs',
  render: (args) => parse(tabs(args)),
  args: { ...data },
  loaders: [
    async () => ({
      ...(await import('./accordion-tabs')).default,
    })
  ],
};

export const SantaBarbaraSand = {
  ...AccordionTabs,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...AccordionTabs,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
