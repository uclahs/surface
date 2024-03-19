import parse from 'html-react-parser';

import messages from './messages.twig';
import data from './messages.yml';

const settings = {
  title: 'Elements/Messages',
};

const Success = {
  name: 'Messages',
  render: (args) => parse(messages(args)),
  args: { ...data },
};

const Info = {
  ...Success,
  name: 'Info message',
  args: {
    ...data,
    type: 'info',
  },
};

const Status = {
  ...Success,
  name: 'Status message',
  args: {
    ...data,
    type: 'status',
  },
};

const Warning = {
  ...Success,
  name: 'Warning message',
  args: {
    ...data,
    type: 'warning',
  },
};

const Error = {
  ...Success,
  name: 'Error message',
  args: {
    ...data,
    type: 'error',
  },
};

export default settings;
export { Success, Info, Status, Warning, Error  };
