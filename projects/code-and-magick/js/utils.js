'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;
  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };
  return {
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    getRandomElementExcept: function (array, currentArrayElement) {
      var newElement;
      do {
        newElement = this.getRandomElement(array);
      } while (newElement === currentArrayElement);
      return newElement;
    },
    isActivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === ENTER_KEY_CODE;
    },
    isDeactivationEvent: function (evt) {
      return isKeyboardEvent(evt) && evt.keyCode === ESCAPE_KEY_CODE;
    },
    fillElement: function (element, color) {
      element.style.fill = color;
    },
    changeBackground: function (element, color) {
      element.style.backgroundColor = color;
    }
  };
})();
