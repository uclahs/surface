import parse from 'html-react-parser';

import share from './share.twig';

const settings = {
  title: 'Components/Share',
};

export const Stacked = {
  name: 'Share',
  render: (args) => parse(share(args)),
};

export default settings;
