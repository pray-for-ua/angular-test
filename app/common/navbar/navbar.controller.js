export default class NavbarController {
  constructor($scope, $location, $stateParams) {
    $scope.onClickBtn = (view) => {
    	$location.search('view', view);
    	$stateParams.view = view
    }
  }
}

NavbarController.$inject = ['$scope', '$location', '$stateParams'];