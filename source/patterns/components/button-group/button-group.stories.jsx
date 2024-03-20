import parse from 'html-react-parser';

import buttons from './button-group.twig';
import data from './button-group.yml';

const settings = {
  title: 'Components/Buttons Group',
};

export const ButtonGroup = {
  name: 'Buttons Group',
  render: (args) => parse(buttons(args)),
  args: { ...data },
};

export default settings;
