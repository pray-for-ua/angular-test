export default app => {
	app.config(['$stateProvider', '$urlRouterProvider', configFn]);

	function configFn($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise('/items/?view=table');

        $stateProvider
            .state('items', {
                url: '/items/?{view}',
                template: '<home></home>'
            })
            .state('createEdit', {
                url: '/items/{action}/?id',
                template: '<create-edit></create-edit>'
            });
	}
}
