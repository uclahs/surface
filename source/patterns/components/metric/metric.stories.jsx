import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import metric from './metric.twig';
import data from './metric.yml';

const settings = {
  title: 'Components/Metric',
};

export const Metric = {
  name: 'Metric',
  render: (args) => parse(metric(args)),
  args: { ...data },
};

export const SantaBarbaraSand = {
  ...Metric,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...Metric,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
