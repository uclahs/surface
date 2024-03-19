'use strict';

/* eslint no-param-reassign: "error" */
/* eslint prefer-destructuring: "off" */
/* eslint prefer-template: "off" */
/* eslint func-names: ["error", "never"] */
/* eslint no-useless-concat: "off" */

((Drupal) => {
  Drupal.theme.message = function (_ref, _ref2) {
    const text = _ref.text;
    const type = _ref2.type;
    const id = _ref2.id;
    const messagesTypes = Drupal.Message.getMessageTypeLabels();
    const messageWrapper = document.createElement('div');

    messageWrapper.setAttribute('class', 'fade messages messages--'.concat(type));
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    messageWrapper.setAttribute('aria-label', messagesTypes[type]);

    messageWrapper.innerHTML = '<div class="messages__container" data-drupal-selector="messages-container">' +
      '<div class="messages__header"><h2 class="visually-hidden">' + messagesTypes[type] + '</h2>' +
      '<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg></div><div class="messages__content">' + text + '</div>' +  '</div>';

    return messageWrapper;
  };
})(Drupal);
