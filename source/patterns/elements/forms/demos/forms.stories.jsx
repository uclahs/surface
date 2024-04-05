import parse from 'html-react-parser';

import text from './textfields.twig';
import fieldset from './fieldset.twig';
import radio from './checkradio.twig';
import label from './label.twig';
import file from './file.twig';
import select from './select.twig';
import textarea from './textarea.twig';
import color from './color.twig';
import range from './range.twig';

const settings = {
  title: 'Elements/Form elements',
};

export const RadioButtons = {
  name: 'Checkbox & Radio buttons',
  render: (args) => parse(radio(args)),
};

export const ColorSelect = {
  name: 'Color',
  render: (args) => parse(color(args)),
};

export const FieldsetField = {
  name: 'Fieldset',
  render: (args) => parse(fieldset(args)),
};

export const FileUpload = {
  name: 'File upload',
  render: (args) => parse(file(args)),
};

export const LabelElement = {
  name: 'Label',
  render: (args) => parse(label(args)),
};

export const RangeBar = {
  name: 'Range',
  render: (args) => parse(range(args)),
};

export const SelectDropdown = {
  name: 'Select menu',
  render: (args) => parse(select(args)),
};

export const TextArea = {
  name: 'Textarea',
  render: (args) => parse(textarea(args)),
};

export const Textfield = {
  name: 'Text fields',
  render: (args) => parse(text(args)),
};

export default settings;
