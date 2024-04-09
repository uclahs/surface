/* eslint-disable */

// Small Drupal behavior to initiate glightbox.
Drupal.behaviors.surfaceLightbox = {
  attach(context) {
    Drupal.surfaceLightbox.init(context);
  },
};

Drupal.surfaceLightbox = {
  init: function (context) {
    once('surfaceLightboxInit', '.glightbox', context).forEach(() => {
      const lightbox = GLightbox({});
    });
  }
};
