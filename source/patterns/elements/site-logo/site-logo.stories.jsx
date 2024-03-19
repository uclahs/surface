import parse from 'html-react-parser';

import { withDarkMode } from '../../../../.storybook/decorators';
import logo from './site-logo.twig';
import data from './site-logo.yml';

const settings = {
  title: 'Elements/Site logo',
};

const Logo = {
  name: 'Site logo',
  render: (args) => parse(logo(args)),
  args: { ...data },
};

const NoLogo = {
  ...Logo,
  name: 'Site logo w/o Logo',
  args: {
    ...data,
    logo: '',
    site_name: 'UCLA David Geffen School of Medicine',
  },
};

const SiteLogoFooter = {
  ...Logo,
  name: 'Site logo in footer',
  args: {
    ...data,
    modifier: 'site-branding--footer',
    logo: 'images/logo-inverse.svg',
    site_name: 'UCLA David Geffen School of Medicine',
  },
  decorators: [ withDarkMode ],
};

export default settings;
export { Logo, NoLogo, SiteLogoFooter  };
