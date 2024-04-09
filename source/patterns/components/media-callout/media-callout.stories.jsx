import parse from 'html-react-parser';

/* eslint-disable */

// Imports decorators for background colors.
import { SantaBarbaraSandBg, VeniceCanalBg } from '../../../../.storybook/decorators';

import media from './media-callout.twig';
import data from './media-callout.yml';
// Importing the custom JS to initiate glightbox.
import '../../../patterns/theme/glightbox/glightbox.js';


const settings = {
  title: 'Components/Media callout',
};

export const MediaCallout = {
  name: 'Media callout',
  render: (args) => parse(media(args)),
  args: {
    ...data,
    video_url: ''
  },
};

export const MediaCalloutVideo = {
  ...MediaCallout,
  name: 'Media callout with video',
  args: {
    ...data,
    video_url: 'https://youtu.be/GJVwbyAY4Sk',
  },
};

export const SantaBarbaraSand = {
  ...MediaCallout,
  name: 'With Santa Barbara Sand background',
  decorators: [SantaBarbaraSandBg],
};

export const VeniceCanal = {
  ...MediaCallout,
  name: 'With Venice Canal background',
  decorators: [VeniceCanalBg],
};

export default settings;
