/* eslint-disable */
import Drupal from 'drupal';
import once from 'once';

Drupal.behaviors.surfaceSidebar = {
  attach(context) {
    Drupal.surfaceSidebar.init(context);
  },
};

Drupal.surfaceSidebar = {
  init: function (context) {
    once('surfaceSidebarInit', '[data-drupal-selector="menu-sidebar--level-1"]', context).forEach(() => {
      document.addEventListener('keyup', e => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          this.closeAllMenus();
        }
      });
    });

    // Menu toggle
    once('surfaceSidebarToggle', '[data-drupal-selector="sidebar-toggle"]', context).forEach(el => el.addEventListener('click', e => {
      e.preventDefault();
      this.toggleMenu(el);
    }));
  },

  // Show menu
  showMenu: (el) => {
    const ariaControls = el.getAttribute('aria-controls');
    const menu = document.getElementById(ariaControls);

    el.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-active-menu-parent');
  },

  // Collapse menu
  collapseMenu: (el) => {
    const ariaControls = el.getAttribute('aria-controls');
    const menu = document.getElementById(ariaControls);

    el.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active-menu-parent');
  },

  // Toggle menu
  toggleMenu: (el) => {
    if (el.getAttribute('aria-expanded') === 'true') {
      Drupal.surfaceSidebar.collapseMenu(el);
    }
    else {
      Drupal.surfaceSidebar.showMenu(el);
    }
  },

  // Close all menus
  closeAllMenus: () => {
    const menuToggles = document.querySelectorAll('[data-drupal-selector="sidebar-toggle"]');

    menuToggles.forEach(el => {
      if (el.getAttribute('aria-expanded') === 'true') {
        Drupal.surfaceSidebar.collapseMenu(el);
      }
    });
  },
};

