import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Branding
  brandTitle: 'UCLA Health',
  brandUrl: 'https://medschool.ucla.edu/',
  brandImage: '',
  brandTarget: '_blank',
  fontBase: '"Helvetica", sans-serif',
  fontCode: 'monospace',

  // Primary, Secondary colors
  colorPrimary: 'hsl(206 63% 42%)',
  colorSecondary: 'hsl(206 63% 42%)',
});
