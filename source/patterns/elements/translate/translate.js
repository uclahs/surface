'use strict';

/* eslint no-param-reassign: "off" */
/* eslint object-shorthand: "off" */
/* eslint no-undef: "off" */
/* eslint func-names: "off" */

((Drupal, once) => {
  const translateContainer = document.querySelector('[data-drupal-selector="translate-container"]');

  Drupal.behaviors.surfaceTranslate = {
    attach: function attach(context) {
      Drupal.surfaceTranslate.init(context);
    },
  };

  Drupal.surfaceTranslate = {
    init: function (context) {
      once('surfaceTranslateInit', '[data-drupal-selector="translate"]', context).forEach(() => {
        document.addEventListener('keyup', e => {
          if (Drupal.surfaceTranslate.translateIsVisible() && e.key === 'Escape' || e.key === 'Esc') {
            e.preventDefault();
            this.toggleTranslate();
          }
        });
      });

      // Translate toggle
      once('surfaceTranslateToggle', '[data-drupal-selector="translate-button"]', context).forEach(el => el.addEventListener('click', e => {
        e.preventDefault();
        this.toggleTranslate();
      }));
    },

    translateIsVisible: () => {
      return translateContainer.classList.contains('is-active');
    },

    toggleTranslate: () => {
      if (Drupal.surfaceTranslate.translateIsVisible()) {
        Drupal.surfaceTranslate.collapseTranslate();
      }
      else {
        Drupal.surfaceTranslate.showTranslate();
      }
    },

    showTranslate: () => {
      const translateButton = document.querySelector('[data-drupal-selector="translate-button"]');

      translateButton.setAttribute('aria-expanded', 'true');
      translateContainer.classList.add('is-active');
    },

    collapseTranslate: () => {
      const translateButton = document.querySelector('[data-drupal-selector="translate-button"]');

      translateButton.setAttribute('aria-expanded', 'false');
      translateContainer.classList.remove('is-active');
    }
  };
})(Drupal, once);
