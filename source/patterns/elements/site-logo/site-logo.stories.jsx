import parse from 'html-react-parser';

import { withBackground } from '../../../../.storybook/decorators';
import logo from './site-logo.twig';
import data from './site-logo.yml';

const settings = {
  title: 'Elements/Site logo',
};

export const Logo = {
  name: 'Site logo',
  render: (args) => parse(logo(args)),
  args: { ...data },
};

export const NoImage = {
  ...Logo,
  name: 'Logo without image',
  args: {
    ...data,
    logo: '',
    site_name: 'UCLA David Geffen School of Medicine',
  },
};

export const SiteLogoFooter = {
  ...Logo,
  name: 'Logo for the footer',
  args: {
    ...data,
    modifier: 'site-logo--footer',
    logo: 'images/logo-inverse.svg',
    site_name: 'UCLA David Geffen School of Medicine',
  },
  decorators: [ withBackground ],
};

export default settings;
