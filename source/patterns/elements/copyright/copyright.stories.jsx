import parse from 'html-react-parser';

import copyright from './copyright.twig';

const settings = {
  title: 'Elements/Copyright',
  render: (args) => parse(copyright(args)),
};

const Copyright = {
  name: 'Copyright',
};

export default settings;
export { Copyright  };
