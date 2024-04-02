import parse from 'html-react-parser';

import siteAlert from './site-alert.twig';
import data from './site-alert.yml';

const settings = {
  title: 'Elements/Site Alert',
};

export const SiteAlert = {
  name: 'Site Alert',
  render: (args) => parse(siteAlert(args)),
  args: { ...data},
};

export default settings;
