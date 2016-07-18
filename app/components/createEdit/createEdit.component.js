import template from './createEdit.html';
import controller from './createEdit.controller';

let createComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'createEditCtrl',
    bindToController: true
  };
};

export default createComponent;
