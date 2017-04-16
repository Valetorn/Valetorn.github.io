'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.getElementById('upload-select-image');
var uploadFile = document.getElementById('upload-file');
var uploadFormCancel = uploadOverlay.querySelector('.upload-form-cancel');
var filterImagePreview = document.querySelector('.filter-image-preview');
var uploadFilterControls = document.querySelector('.upload-filter-controls');
var uploadResizeControls = uploadOverlay.querySelector('.upload-resize-controls');
var uploadFilter = document.getElementById('upload-filter');
var oldFilter = null;
var filterDefault = document.getElementById('upload-filter-none').value;
var scaleDefault = 100;
var uploadFilterLevel = document.querySelector('.upload-filter-level');

var changeAriaAttribute = function (isOpen) {
  uploadOverlay.setAttribute('aria-pressed', !isOpen);
};
var uploadOverlayKeydownHandler = function (evt) {
  if (window.utils.isDeactivationEvent(evt)) {
    closeUploadOverlay();
    uploadFilter.reset();
    changeAriaAttribute(false);
  }
};
var openUploadOverlay = function () {
  uploadSelectImage.classList.add('invisible');
  uploadOverlay.classList.remove('invisible');
  document.addEventListener('keydown', uploadOverlayKeydownHandler);
  changeAriaAttribute(true);
  applyFilter(filterDefault);
  adjustScale(scaleDefault);
};
var closeUploadOverlay = function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
  document.removeEventListener('keydown', uploadOverlayKeydownHandler);
  changeAriaAttribute(false);
};
var applyFilter = function (newFilter) {
  if (oldFilter) {
    filterImagePreview.classList.remove('filter-' + oldFilter);
    filterImagePreview.style.filter = '';
  }
  filterImagePreview.classList.add('filter-' + newFilter);
  oldFilter = newFilter;
  if (filterImagePreview.classList.contains('filter-none') || filterImagePreview.classList.contains('filter-phobos') || filterImagePreview.classList.contains('filter-heat')) {
    uploadFilterLevel.classList.add('invisible');
  } else {
    uploadFilterLevel.classList.remove('invisible');
  }
};
window.applyFilterRange = function (filterRangeValue) {
  if (filterImagePreview.classList.contains('filter-sepia')) {
    filterImagePreview.style.filter = 'sepia(' + filterRangeValue + ')';
  } else if (filterImagePreview.classList.contains('filter-chrome')) {
    filterImagePreview.style.filter = 'grayscale(' + filterRangeValue + ')';
  } else if (filterImagePreview.classList.contains('filter-marvin')) {
    filterImagePreview.style.filter = 'invert(' + filterRangeValue * 100 + '%' + ')';
  }
};
var adjustScale = function (scale) {
  filterImagePreview.style.transform = 'scale(' + parseInt(scale, 10) / 100 + ')';
};

uploadFile.addEventListener('change', function () {
  openUploadOverlay();
});
uploadFormCancel.addEventListener('click', function () {
  closeUploadOverlay();
});
uploadFormCancel.addEventListener('keydown', function (evt) {
  if (window.utils.isActivationEvent(evt)) {
    closeUploadOverlay();
  }
});

window.initializeScale(uploadResizeControls, 25, scaleDefault, adjustScale);
window.initializeFilters(uploadFilterControls, applyFilter);

