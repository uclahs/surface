/* eslint-disable */
import Drupal from 'drupal';

Drupal.behaviors.accordion = {
  attach(context) {
    const accordions = context.querySelectorAll('.accordion');

    if(accordions) {
      const accordionHeaders = context.querySelectorAll('.accordion__header');
      accordionHeaders.forEach((accordion) => {
        accordion.addEventListener('click', (e) => {
          this.toggleAccordion(e);
        });
      });
    }
  },

  toggleAccordion (e) {
    const target = e.currentTarget;
    const state = target.parentNode.classList.contains('accordion--open');

    this.closeAccordions();
    !state ? this.openAccordion(target): null;
  },

  closeAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((accordion) => {
      accordion.classList.remove('accordion--open');
      accordion.firstElementChild.setAttribute('aria-expanded', 'false');
    });
  },

  openAccordion(target) {
    target.parentNode.classList.add('accordion--open');
    target.setAttribute('aria-expanded', 'true');
  }
};
