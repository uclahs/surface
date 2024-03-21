import parse from 'html-react-parser';

import banner from './cta-banner.twig';
import data from './cta-banner.yml';

const settings = {
  title: 'Components/CTA Banner',
};

export const CTABannerMatterport = {
  name: 'Matterport CTA Banner',
  render: (args) => parse(banner(args)),
  args: { ...data },
};

export const CTABannerQualtrics = {
  ...CTABannerMatterport,
  name: 'Qualtrics CTA Banner',
  args: {
    ...data,
    modifier: 'bg-gradient-linear-ucla-blue cta-banner--qualtrics',
    image: './images/cta-qualtrics.png',
  },
};

export default settings;
