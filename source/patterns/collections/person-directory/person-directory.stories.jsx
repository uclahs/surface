import parse from 'html-react-parser';

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import person from './person-directory.twig';
import data from './person-directory.yml';

const settings = {
  title: 'Collections/Person directory',
  args: { ...data },
  render: (args) => parse(person(args)),
};

const Grid = {
  name: 'Person directory',
  args: { ...data },
};

const List = {
  name: 'Person directory',
  ...Grid,
  args: {
    ...data,
    modifier: 'is-list',
  },
};

const Light = {
  name: 'With Santa Barbara Sand Background',
  args: { ...data },
  decorators: [SantaBarbaraSandBg],
};

const Dark = {
  name: 'With Venice Canal Background',
  args: { ...data },
  decorators: [VeniceCanalBg],
};

export default settings;
export { Grid, List, Light, Dark };
