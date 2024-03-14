import parse from 'html-react-parser';

import cta from './call-to-action.twig';
import data from './call-to-action.yml';

const settings = {
  title: 'Components/Call to action',
  args: { ...data },
  render: (args) => parse(cta(args)),
};

const CTA = {
  name: 'Call to action',
  args: { ...data },
};

export default settings;
export { CTA };
