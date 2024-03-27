import parse from 'html-react-parser';

import image from './image.twig';
import data from './image.yml';

export default {
  title: 'Elements/Image',
  tags: ['autodocs'],
  render: (args) => parse(image(args)),
};

export const Image = {
  name: 'Square',
  args: {
    ...data,
    image: '<img src="./images/1-1.svg" alt="placeholder text" />',
  },
};

export const Portrait = {
  name: '2:3',
  args: {
    ...data,
    image: '<img src="./images/2-3.svg" alt="placeholder text" />',
  },
};

export const Rectangular32 = {
  name: '3:2',
  args: {
    ...data,
    image: '<img src="./images/3-2.svg" alt="placeholder text" />',
  },
};

export const Rectangular43 = {
  name: '4:3',
  args: {
    ...data,
    image: '<img src="./images/4-3.svg" alt="placeholder text" />',
  },
};

export const Rectangular169 = {
  name: '16:9',
  args: {
    ...data,
    image: '<img src="./images/16-9.svg" alt="placeholder text" />',
  },
};
