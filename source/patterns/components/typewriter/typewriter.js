'use strict';

/* eslint no-param-reassign: "off" */
/* eslint func-names: "off" */
/* eslint object-shorthand: "off" */
/* eslint prefer-template: "off" */

((Drupal) => {
  Drupal.behaviors.surfaceTypewriter = {
    attach: function attach() {
      Drupal.surfaceTypewriter.init();
    },
  };

  Drupal.surfaceTypewriter = {
    init: function () {
      const surfaceTypewriters = document.querySelectorAll('.typewriter-cta');

      surfaceTypewriters.forEach((typewriterElement) => {
        const typewriter = new Typewriter(typewriterElement, { loop: true }); // eslint-disable-line no-undef

        const pauseDuration = 2500;

        const wordsFromHTML = Array.from(document.querySelectorAll('.typewriter__words')).map((element) => {
          return element.textContent;
        });

        wordsFromHTML.forEach((word) => {
          typewriter.typeString(word + '').pauseFor(pauseDuration).deleteAll();
        });

        typewriter.start();
      });
    },
  };
})(Drupal);
