export default class CreateEditController {
  constructor($scope, $stateParams, $location, itemsService) {
  	$scope.initPage = () => {
  		this.buttonText = $stateParams.action;
  		this.item = {};
  		if (this.buttonText == 'edit') {
  			itemsService.get(parseInt($stateParams.id, 10)).then(
  				(res) => {
  					this.item = res.data;
  				},
  				(err) => {console.log(err)}
			);
  		};
  	};
  	$scope.sendData = () => {
  		itemsService.save(this.item).then((res) => {
  			$location.path('#/items/?view=table');
  		});
  	};
  }
}
CreateEditController.$inject = ['$scope', '$stateParams', '$location', 'itemsService'];