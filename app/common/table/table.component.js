import template from './table.html';
import controller from './table.controller';

let tableComponent = function () {
  return {
    restrict: 'E',
    scope: {
    	items: '='
    },
    template,
    controller,
    controllerAs: 'tableCtrl',
    bindToController: true
  };
};

export default tableComponent;
