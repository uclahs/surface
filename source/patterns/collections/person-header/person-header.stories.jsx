import parse from 'html-react-parser';

// Imports decorator to add background color to the light version of the badge.
import { withBackground } from '../../../../.storybook/decorators';

import person from './person-header.twig';
import data from './person-header.yml';

const settings = {
  title: 'Collections/Person header',
};

export const Person = {
  name: 'Person header',
  render: (args) => parse(person(args)),
  args: { ...data },
  decorators: [withBackground],
};

export default settings;
