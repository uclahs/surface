import parse from 'html-react-parser';

import { withBackground } from '../../../../.storybook/decorators';
import logo from './site-branding.twig';
import data from './site-branding.yml';

const settings = {
  title: 'Elements/Site branding',
};

export const Logo = {
  name: 'Site branding',
  render: (args) => parse(logo(args)),
  args: { ...data },
};

export const NoImage = {
  ...Logo,
  name: 'Site branding without image',
  args: {
    ...data,
    logo: '',
    site_name: 'UCLA David Geffen School of Medicine',
  },
};

export const SiteLogoFooter = {
  ...Logo,
  name: 'Site branding for the footer',
  args: {
    ...data,
    modifier: 'site-branding--footer',
    logo: 'images/logo-inverse.svg',
    site_name: 'UCLA David Geffen School of Medicine',
  },
  decorators: [ withBackground ],
};

export default settings;
