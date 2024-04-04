import parse from 'html-react-parser';

import menu from './menu-main.twig';
import data from './menu-main.yml';
import dataDropdown from './menu-main-dropdown.yml';
import dataMega from './menu-main-mega.yml';

import './menu-utils';
import './menu-main';
import './menu-main-second-level';

const settings = {
  title: 'Components/Menu main',
};

export const MenuDefault = {
  name: 'Menu default',
  render: (args) => parse(menu(args)),
  args: { ...data },
};

export const MenuDropdown = {
  name: 'Menu dropdown',
  render: (args) => parse(menu(args)),
  args: { ...dataDropdown },
};

export const MenuMega = {
  name: 'Menu mega',
  render: (args) => parse(menu(args)),
  args: { ...dataMega },
};

export default settings;
