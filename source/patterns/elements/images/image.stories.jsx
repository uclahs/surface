import image from './image.twig';
import data from './image.yml';

const settings = {
  title: 'Elements/Image',
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Image = {
  name: 'Square',
  render: (args) => image(args),
  args: {
    ...data,
    image: '<img src="./images/1-1.svg" alt="placeholder text" />',
  },
};

export const Portrait = {
  ...Image,
  name: '2:3',
  args: {
    ...data,
    image: '<img src="./images/2-3.svg" alt="placeholder text" />',
  },
};

export const Rectangular32 = {
  ...Image,
  name: '3:2',
  args: {
    ...data,
    image: '<img src="./images/3-2.svg" alt="placeholder text" />',
  },
};

export const Rectangular43 = {
  ...Image,
  name: '4:3',
  args: {
    ...data,
    image: '<img src="./images/4-3.svg" alt="placeholder text" />',
  },
};

export const Rectangular169 = {
  ...Image,
  name: '16:9',
  args: {
    ...data,
    image: '<img src="./images/16-9.svg" alt="placeholder text" />',
  },
};

export default settings;
