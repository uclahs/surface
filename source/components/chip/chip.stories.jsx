import parse from 'html-react-parser';

import twigTemplate from './chip.twig';
import data from './chip.yml';
import './chip.css';
import './chip.cjs';

export default {
  title: 'Components/Chip',
  tags: ['autodocs'],
};

export const Chip = {
  name: 'Chip',
  render: () => parse(twigTemplate(data)),
  args: { ...data },
};
