((Drupal) => {
  Drupal.behaviors.chip = {
    attach(context) {
      context.querySelectorAll('.chip--dismissable').forEach((chip) => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('chip--dismissed');
        });
      });
    },
  };
})(Drupal);
