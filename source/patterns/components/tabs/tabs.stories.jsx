import parse from 'html-react-parser';

import tabs from './tabs.twig';
import data from './tabs.yml';

const settings = {
  title: 'Components/Tabs',
};

export const Stacked = {
  name: 'Tabs',
  render: (args) => parse(tabs(args)),
  args: { ...data },
};

export default settings;
