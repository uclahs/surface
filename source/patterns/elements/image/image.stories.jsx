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

// const settings = {
//   title: 'Image',
//   tags: ['autodocs'],
//   // Adding args here so they are available to all the stories.
//   args: { ...data },
// };

// // Default image story.
// const Image = {
//   render: (args) => parse(image(args)),
//   args: { ...data },
// };

// // Square image.
// const Square = {
//   ...Image,
//   name: 'Square image',
//   args: {
//     ...Image.args,
//     src: '../dist/images/1-1.svg',
//   },
// };

// // Portrait image.
// const Portrait = {
//   ...Image,
//   name: 'Portrait image',
//   args: {
//     ...Image.args,
//     src: '../dist/images/2-3.svg',
//   },
// };

// // 3:2 aspect ratio image.
// const ThreeByTwo = {
//   ...Image,
//   Component: '3:2',
//   name: '3:2',
//   args: {
//     ...Image.args,
//     src: '../dist/images/3-2.svg',
//   },
// };

// // 4:3 aspect ratio image.
// const FourByThree = {
//   ...Image,
//   name: '4:3',
//   args: {
//     ...Image.args,
//     src: '../dist/images/4-3.svg',
//   },
// };

// // 16:9 aspect ratio image.
// const SixteenByNine = {
//   ...Image,
//   storyName: '16:9',
//   args: {
//     ...Image.args,
//     src: '../dist/images/4-3.svg',
//   },
// };

// export default settings;
// export { Square, Portrait, ThreeByTwo, FourByThree, SixteenByNine };
