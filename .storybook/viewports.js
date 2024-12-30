// Defining custom viewports to use within Storybook's preview.
const customViewports = {
  mobileSmall: {
    name: 'Mobile small',
    styles: {
      width: '400px',
      height: '963px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '640px',
      height: '801px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '801px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024px',
      height: '801px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '801px',
    },
  },
  desktopLarge: {
    name: 'Desktop large',
    styles: {
      width: '1440px',
      height: '801px',
    },
  },
};

export default customViewports;
