import { withBackground } from '../../../../.storybook/decorators';
import breadcrumb from './breadcrumb.twig';
import data from './breadcrumb.yml';

const settings = {
  title: 'Elements/Breadcrumb',
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Breadcrumb = {
  render: (args) => breadcrumb(args),
  args: { ...data },
  decorators: [withBackground],
};

export default settings;
