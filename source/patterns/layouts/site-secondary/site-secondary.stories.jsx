import parse from 'html-react-parser';

import secondary from './site-secondary.twig';

const settings = {
  title: 'Components/Site secondary',
};

export const SiteSecondary = {
  name: 'Site secondary',
  render: (args) => parse(secondary(args)),
};

export default settings;
