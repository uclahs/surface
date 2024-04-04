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
          this.innerHTML = '<svg class="icon--pause" aria-hidden="true" focusable="false" data-icon="circle-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V192c0-17.7 14.3-32 32-32s32 14.3 32 32z"></path></svg>';
          this.ariaLabel = 'Click to pause video';
        } else {
          video.pause();
          // Adds play svg icon.
          this.innerHTML = '<svg class="icon--play" aria-hidden="true" focusable="false" data-icon="circle-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path></svg>';
          this.ariaLabel = 'Click to play video';
        }
      });
    }
  };
}
)(Drupal);;
