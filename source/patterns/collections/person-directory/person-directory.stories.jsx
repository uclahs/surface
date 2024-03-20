import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import person from './person-directory.twig';
import data from './person-directory.yml';

const settings = {
  title: 'Collections/Person directory',
};

export const GridDisplay = {
  name: 'Person directory - Grid',
  render: (args) => parse(person(args)),
  args: { ...data },
};

export const ListDisplay = {
  ...GridDisplay,
  name: 'Person directory - List',
  args: {
    ...data,
    modifier: 'is-list',
  },
};

export const SantaBarbaraSand = {
  ...GridDisplay,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...GridDisplay,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
