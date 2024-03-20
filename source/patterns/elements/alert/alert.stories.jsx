import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import alert from './alert.twig';
import data from './alert.yml';

const settings = {
  title: 'Elements/Alert',
};

export const Success = {
  name: 'Success alert',
  render: (args) => parse(alert(args)),
  args: { ...data },
};

export const Warning = {
  ...Success,
  name: 'Warning alert',
  args: {
    ...data,
    modifier: 'alert--warning',
  },
};

export const Error = {
  ...Success,
  name: 'Error alert',
  args: {
    ...data,
    modifier: 'alert--error',
  },
};

export const SantaBarbaraSand = {
  ...Success,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...Success,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
