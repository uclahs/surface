/* eslint-disable */

// Capture google map url to use on another <a> element.
Drupal.behaviors.mapUrl = {
  attach(context) {
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
