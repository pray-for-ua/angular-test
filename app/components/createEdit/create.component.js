import template from './create.html';
import controller from './create.controller';

let createComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'createCtrl',
    bindToController: true
  };
};

export default createComponent;
