import { create } from '@storybook/theming/create';
// import logo from '../logo.svg';

export default create({
  base: 'light',

  // Branding
  brandTitle: 'Surface',
  brandUrl: 'https://github.com/uclahs/surface',
  // brandImage: logo,
  brandTarget: '_self',
  fontBase: '"Helvetica", sans-serif',
  fontCode: 'monospace',

  // Primary, Secondary colors
  colorPrimary: 'hsl(206 63% 42%)',
  colorSecondary: 'hsl(206 63% 42%)',
});
