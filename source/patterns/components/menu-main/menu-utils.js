'use strict';

/* eslint no-param-reassign: "off" */

((Drupal) => {
  Drupal.surface = {};

  function isDesktopNav() {
    const navButtons = document.querySelector('[data-drupal-selector="mobile-button"]');
    return navButtons ? window.getComputedStyle(navButtons).getPropertyValue('display') === 'none' : false;
  }

  Drupal.surface.isDesktopNav = isDesktopNav;

})(Drupal);
