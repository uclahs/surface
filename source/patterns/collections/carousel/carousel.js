/* eslint-disable */

((Drupal) => {
  Drupal.behaviors.surfaceCarousel = {
    attach: function attach() {
      Drupal.surfaceCarousel.init();
    },
  };

  Drupal.surfaceCarousel = {
    init: function () {
      const surfaceCarousel = document.querySelectorAll('.glide');
      surfaceCarousel.forEach((carousel) => {
        const glide = new Glide(carousel, { // eslint-disable-line no-undef
          type: 'slide'
        });
        glide.mount();
      });
    },
  };
})(Drupal);
