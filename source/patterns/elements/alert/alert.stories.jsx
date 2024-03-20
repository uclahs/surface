import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import alert from './alert.twig';
import data from './alert.yml';

const settings = {
  title: 'Elements/Alert',
  args: { ...data },
};

const Success = {
  name: 'Success alert',
  render: (args) => parse(alert(args)),
  args: { ...data },
};

const Warning = {
  ...Success,
  name: 'Warning alert',
  args: {
    ...data,
    modifier: 'alert--warning',
  },
};

const Error = {
  ...Success,
  name: 'Error alert',
  args: {
    ...data,
    modifier: 'alert--error',
  },
};

const SantaBarbaraSand = {
  ...Success,
  name: 'With Santa Barbara Sand Background',
  decorators: [SantaBarbaraSandBg],
};

const VeniceCanal = {
  ...Success,
  name: 'With Venice Canal Background',
  decorators: [VeniceCanalBg],
};

export default settings;
export { Success, Warning, Error, SantaBarbaraSand, VeniceCanal };
