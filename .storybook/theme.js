import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Helvetica", sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: 'UCLA Health',
  brandUrl: 'https://medschool.ucla.edu/',
  brandImage: 'logo.svg',
  brandTarget: '_self',

  // Primary, Secondary colors
  colorPrimary: 'hsl(206 63% 42%)',
  colorSecondary: 'hsl(206 63% 42%)',

  // UI
  appBg: '#F8F8F8',
  appContentBg: '#fff',
  appPreviewBg: '#fff',
  appBorderColor: 'hsl(202 100% 18%)',
  appBorderRadius: 4,

  // Text colors
  textColor: 'hsl(202 100% 18%)',
  textInverseColor: '#fff',

  // Toolbar default and active colors
  barTextColor: 'hsl(202 100% 18%)',
  barSelectedColor: 'hsl(202 100% 18%)',
  barHoverColor: 'hsl(202 100% 18%)',
  barBg: '#F8F8F8',

  // Form colors
  inputBg: 'hsl(202 100% 18%)',
  inputBorder: 'hsl(202 100% 18%)',
  inputTextColor: 'hsl(202 100% 18%)',
  inputBorderRadius: 2,
});
