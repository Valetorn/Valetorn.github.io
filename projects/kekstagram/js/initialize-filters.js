'use strict';

window.initializeFilters = (function () {
  var uploadFilterLevelLine = document.querySelector('.upload-filter-level-line');
  var uploadFilterLevelPin = document.querySelector('.upload-filter-level-pin');
  var uploadFilterLevelVal = document.querySelector('.upload-filter-level-val');
  var MAX_VALUE;
  var MIN_VALUE = 0;
  var filterRangeValue = 1;
  return function (element, callback) {
    uploadFilterLevelPin.style.left = 100 + '%';
    uploadFilterLevelVal.style.width = 100 + '%';
    element.addEventListener('click', function (evt) {
      var filter = evt.target;
      if (filter.tagName === 'INPUT') {
        callback(filter.value);
        window.applyFilterRange(filterRangeValue);
      }
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivationEvent(evt)) {
        var filter = evt.target;
        filter.click();
      }
    });
    uploadFilterLevelPin.addEventListener('mousedown', function (evt) {
      MAX_VALUE = getComputedStyle(uploadFilterLevelLine).width;
      evt.preventDefault();
      var startCoord = {
        x: evt.clientX
      };
      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        var shift = {
          x: startCoord.x - moveEvt.clientX
        };
        startCoord = {
          x: moveEvt.clientX
        };
        var currentCoord = uploadFilterLevelPin.offsetLeft - shift.x;
        setFilterRangeValue(currentCoord);
      };
      var setFilterRangeValue = function (currentCoord) {
        if (currentCoord < parseInt(MAX_VALUE, 10) && currentCoord > MIN_VALUE) {
          uploadFilterLevelPin.style.left = currentCoord + 'px';
          uploadFilterLevelVal.style.width = currentCoord + 'px';
        }
        filterRangeValue = (currentCoord / parseInt(MAX_VALUE, 10)).toFixed(2);
        window.applyFilterRange(filterRangeValue);
      };
      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };
})();
