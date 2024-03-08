import parse from 'html-react-parser';

import image from './image.twig';
import data from './image.yml';

export default {
  title: 'Elements/Image',
  tags: ['autodocs'],
  render: () => parse(image(data)),
};

export const Image = {
  name: 'Square',
  args: {
    ...data,
    src: '../dist/images/16-9.svg',
  },
};


export const Portrait = {
  ...Image,
  args: {
    ...Image.args,
    src: '../dist/images/2-3.svg',
  },
  name: '2:3',
};

export const Rectangular32 = {
  render: () => parse(image(data)),
  args: {
    ...Image.args,
      src: '../dist/images/3-2.svg',
  },
  name: '3:2',
};

export const Rectangular43 = {
  name: '4:3',
  render: () => parse(image(data)),
  args: {
    ...Image.args,
      src: '../dist/images/4-3.svg',
  },
};

export const Rectangular169 = {
  name: '16:9',
  render: () => parse(image(data)),
  args: {
    ...Image.args,
      src: '../dist/images/16-9.svg',
  },
};
