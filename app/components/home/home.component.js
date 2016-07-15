import table from './table.view.html';
import tiles from './tiles.view.html';
import controller from './home.controller';

// This is the Directive Definition Object function seen in a traditional Angular setup.
// In this example it is abstracted as a shell and used in the home.js.
let homeComponent = function ($stateParams) {
  let template = table;
  if ($stateParams.view == 'tiles') {
    template = tiles;
  }
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
