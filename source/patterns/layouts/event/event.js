'use strict';

/* eslint no-param-reassign: "off" */
/* eslint func-names: "off" */
/* eslint no-undef: "off" */

(function (Drupal, drupalSettings, once) {
  /*
  * Capture google map url to use on another <a> element.
  */
  Drupal.behaviors.mapUrl = {

    attach: function attach(context) {
      // Set variables for source and target map links selectors.
      // Using once() in vanilla JS as described in docroot/core/assets/vendor/once/once.js
      // <script>
      //   // once methods always return an array, to simplify the use with a single
      //   // element use destructuring or the shift method.
      //   const [myElement] = once('my-once-id', document.body);
      //   const myElement = once('my-once-id', document.body).shift();
      // </script>
      const sourceLink = once('map-link', document.querySelector('.address-map-link', context)).shift();
      const targetLink = document.querySelector('.event__directions--url', context);

      // Only if the google map link exists, proceed.
      if (sourceLink) {

        // Set variable with value of google map link/url.
        const googleMapUrl = sourceLink.getAttribute('href');

        // Replace the placeholder href value of target link with the google map url.
        targetLink.href = googleMapUrl;
      }
    }
  };
})(Drupal, drupalSettings, once);
