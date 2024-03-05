import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Branding
  brandTitle: 'UCLA Health',
  brandUrl: 'https://medschool.ucla.edu/',
  brandImage: './dist/images/logo.svg',
  brandTarget: '_self',
  fontBase: '"Helvetica", sans-serif',
  fontCode: 'monospace',

  // Primary, Secondary colors
  colorPrimary: 'hsl(206 63% 42%)',
  colorSecondary: 'hsl(206 63% 42%)',
});
