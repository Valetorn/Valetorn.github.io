'use strict';

window.render = (function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var wizardTemplate = document.querySelector('.setup-wizard');
  var rendeWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    var WizardElCoat = wizardElement.querySelector('#wizard-coat');
    var wizardElEyes = wizardElement.querySelector('#wizard-eyes');
    wizardElement.style.position = 'static';
    wizardElement.style.width = 50;
    wizardElement.style.height = 50;
    WizardElCoat.removeAttribute('id');
    WizardElCoat.classList.add('wizard-coat');
    WizardElCoat.style.fill = wizard.colorCoat;
    wizardElEyes.removeAttribute('id');
    wizardElEyes.classList.add('wizard-eyes');
    wizardElEyes.style.fill = wizard.colorEyes;
    wizardElement.setAttribute('title', wizard.name);
    return wizardElement;
  };
  return function (wizards) {
    setupSimilar.innerHTML = '';
    wizards.forEach(function (element, index, array) {
      if (index < 5) {
        setupSimilar.appendChild(rendeWizard(window.utils.getRandomElementExcept(array, element)));
      }
    });
  };
})();

