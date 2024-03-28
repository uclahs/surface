/* eslint-disable */
import Drupal from 'drupal';

Drupal.behaviors.surfaceTypewriter = {
  attach(context) {
    Drupal.surfaceTypewriter.init();
  },
};

Drupal.surfaceTypewriter = {
  init: function () {
    const surfaceTypewriters = document.querySelectorAll('.typewriter');
    surfaceTypewriters.forEach((typewriterElement) => {
      const typewriter = new Typewriter(typewriterElement, { loop: true });
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
