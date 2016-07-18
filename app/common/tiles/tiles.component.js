import template from './tiles.html';
import controller from './tiles.controller';

let tilesComponent = function () {
  return {
    restrict: 'E',
    scope: {
    	items: '=',
        search: '='
    },
    template,
    controller,
    controllerAs: 'tilesCtrl',
    bindToController: true
  };
};

export default tilesComponent;
