/* eslint-disable */
((Drupal)=>{
  Drupal.behaviors.heroVideo = {
    attach(context) {
      const video = document.querySelector('video', context);
      const playButton = document.querySelector('.video-hero__button', context);
      playButton.addEventListener('click', function() {
        if (video.paused) {
          video.play();
          // Adds pause svg icon.
          this.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
          this.ariaLabel = 'Click to pause video';
        } else {
          video.pause();
          // Adds play svg icon.
          this.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
          this.ariaLabel = 'Click to play video';
        }
      });
    }
  };
}
)(Drupal);;
