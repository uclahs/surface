import parse from 'html-react-parser';

import hero from './video-hero.twig';
import data from './video-hero.yml';

const settings = {
  title: 'Components/Video Hero',
};

export const VideoHero = {
  name: 'Video hero',
  render: (args) => parse(hero(args)),
  args: { ...data },
};

export default settings;
