'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  var setupKeydownHandler = function (evt) {
    if (window.utils.isDeactivationEvent(evt)) {
      setup.classList.add('invisible');
      changeAriaAttribute(false);
    }
  };
  var changeAriaAttribute = function (isOpen) {
    setupOpenIcon.setAttribute('aria-pressed', isOpen);
    document.getElementById('wizard-coat').setAttribute('aria-pressed', isOpen);
    document.getElementById('wizard-eyes').setAttribute('aria-pressed', isOpen);
    document.querySelector('.setup-fireball-wrap').setAttribute('aria-pressed', isOpen);
    document.querySelector('.setup-close').setAttribute('aria-pressed', !isOpen);
  };
  return {
    showSetupElement: function () {
      setup.classList.remove('invisible');
      document.addEventListener('keydown', setupKeydownHandler);
      changeAriaAttribute(true);
    },
    hideSetupElement: function (evt) {
      setup.classList.add('invisible');
      document.removeEventListener('keydown', setupKeydownHandler);
      changeAriaAttribute(false);
      if (typeof this.callback === 'function') {
        this.callback();
      }
    },
    callback: null
  };
})();
