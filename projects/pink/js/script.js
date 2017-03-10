/* main-menu */

var topBlock = document.querySelector('.main-menu__top-block');

var mainNav = document.querySelector('.main-menu__navigation');

var mainBtn = document.querySelector('.main-menu__btn');
/* form */

var form = document.querySelector('form');

var firstName = document.getElementById('first-name');

var secondName = document.getElementById('second-name');

var lastName = document.getElementById('last-name');
/* popup */

var popupWrap = document.querySelector('.popup-wrapper');

var popupError = document.querySelector('.popup-error');

var popupGood = document.querySelector('.popup-good');

var popupBtnError = document.querySelector('.popup-error__btn');

var popupBtnGood = document.querySelector('.popup-good__btn');
/* main-menu */

mainNav.classList.add('main-menu__navigation--hidden');
topBlock.classList.add('main-menu__top-block--active');

if (mainBtn.classList.contains('main-menu__btn--close')) {
  mainBtn.classList.remove('main-menu__btn--close');
  mainBtn.classList.add('main-menu__btn--active');
}

mainBtn.addEventListener('click', function() {
  if(mainNav.classList.contains('main-menu__navigation--hidden')) {
    mainNav.classList.remove('main-menu__navigation--hidden');
    topBlock.classList.remove('main-menu__top-block--active');
    mainBtn.classList.remove('main-menu__btn--active');
    mainBtn.classList.add('main-menu__btn--close');
  } else {
    mainNav.classList.add('main-menu__navigation--hidden');
    topBlock.classList.add('main-menu__top-block--active');
    mainBtn.classList.remove('main-menu__btn--close');
    mainBtn.classList.add('main-menu__btn--active');
  }
});
/* popup */

popupBtnError.addEventListener("click", function() {
  popupWrap.classList.add('popup-wrapper--hidden');
});
popupBtnGood.addEventListener("click", function() {
  popupWrap.classList.add('popup-wrapper--hidden');
});
/* form */

form.addEventListener("submit", function(event) {
  if(!firstName.value || !secondName.value || !lastName.value) {
    event.preventDefault();
    popupWrap.classList.remove('popup-wrapper--hidden');
    popupError.classList.remove('popup-error--hidden');
  } else {
    event.preventDefault();
    popupError.classList.add('popup-error--hidden');
    popupWrap.classList.remove('popup-wrapper--hidden');
    popupGood.classList.remove('popup-good--hidden');
  }
});

