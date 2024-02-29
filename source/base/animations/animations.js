const animation = document.querySelector('.messages.fade');

if (animation) {
  animation.addEventListener('animationend', () => {
    animation.classList.remove('fade');
  });
}
