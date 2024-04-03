/* eslint-disable */

Drupal.behaviors.primaryTabs = {
  attach(context) {
    Drupal.primaryTabs.init(context);
  }
};

Drupal.primaryTabs = {
  init: function (context) {
    // Show/Hide Tabs content
    const tabs = context.querySelectorAll('.tabs__link');
    const tabsContent = context.querySelectorAll('.tabs__content');

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        tabs.forEach(tab => tab.classList.remove('is-active'));
        this.classList.add('is-active');
        tabsContent.forEach(content => content.classList.add('hidden'));
        tabsContent[i].classList.remove('hidden');
      });
    });
  },
};
