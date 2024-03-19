import parse from 'html-react-parser';

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

export default settings;
export { Success, Warning, Error };
