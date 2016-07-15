export default class HomeController {
  constructor($scope, $stateParams, itemsService) {
    $scope.initData = () => {
      itemsService.query().then((res) => {
        $scope.items = res.data;
      });
    }; 
  }
}

HomeController.$inject = ['$scope', '$stateParams', 'itemsService'];

