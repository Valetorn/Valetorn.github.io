'use strict';

window.colorizeElement = (function () {
  var timer = null;
  return function (element, colors, callback) {
    var currentColor = colors[0];
    var changeColor = function () {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
    };
    var addNewMagick = function () {
      changeColor();
      clearTimeout(timer);
      timer = setTimeout(window.loadWizards, 5000);
    };
    element.addEventListener('click', function () {
      addNewMagick();
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivationEvent(evt)) {
        addNewMagick();
      }
    });
  };
})();

