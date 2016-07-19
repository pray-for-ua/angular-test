export default class NavbarController {
  constructor($scope, $location, $stateParams, itemsService) {
  	this.keywords = '';
    $scope.onClickBtn = (view) => {
    	$location.search('view', view);
    	$stateParams.view = view
    }

    $scope.searchItems = () => {
    	itemsService.search({keywords: this.keywords}).then((res) => {
    		console.log(res)
    	});
    };
  }
}

NavbarController.$inject = ['$scope', '$location', '$stateParams', 'itemsService'];