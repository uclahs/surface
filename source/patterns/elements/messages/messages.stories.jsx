import parse from 'html-react-parser';

import messages from './messages.twig';
import data from './messages.yml';

const settings = {
  title: 'Elements/Messages',
};

export const Success = {
  name: 'Messages',
  render: (args) => parse(messages(args)),
  args: { ...data },
};

export const Info = {
  ...Success,
  name: 'Info message',
  args: {
    ...data,
    type: 'info',
  },
};

export const Status = {
  ...Success,
  name: 'Status message',
  args: {
    ...data,
    type: 'status',
  },
};

export const Warning = {
  ...Success,
  name: 'Warning message',
  args: {
    ...data,
    type: 'warning',
  },
};

export const Error = {
  ...Success,
  name: 'Error message',
  args: {
    ...data,
    type: 'error',
  },
};

export default settings;
