export default class HomeController {
  constructor($scope, $stateParams, itemsService) {
    $scope.initData = () => {
      $scope.stateParams = $stateParams;
      $scope.view = $stateParams.view;
      itemsService.query().then((res) => {
        $scope.items = res.data;
      });
    };
    $scope.$watch(function (){return $stateParams.view}, function (value){
        $scope.view = value;
    });
  }
}

HomeController.$inject = ['$scope', '$stateParams', 'itemsService'];

