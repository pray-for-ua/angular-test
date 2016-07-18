import template from './home.html';
import controller from './home.controller';

// This is the Directive Definition Object function seen in a traditional Angular setup.
// In this example it is abstracted as a shell and used in the home.js.
let homeComponent = function ($stateParams) {
  return {
    restrict: 'EA',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'homeCtrl',
    bindToController: true
  };
};

homeComponent.$ingect = ['$stateParams'];

export default homeComponent;
