/* eslint-disable */

((Drupal) => {
  Drupal.behaviors.surfaceSlider = {
    attach: function attach() {
      Drupal.surfaceSlider.init();
    },
  };

  Drupal.surfaceSlider = {
    init: function () {
      const surfaceSlider = document.querySelectorAll('.glide');
      surfaceSlider.forEach((slider) => {
        const glide = new Glide(slider, {
          type: 'slide'
        });
        glide.mount();
      });
    },
  };
})(Drupal);
