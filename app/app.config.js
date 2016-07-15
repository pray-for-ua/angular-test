export default app => {
	app.config(['$stateProvider', '$urlRouterProvider', configFn]);

	function configFn($stateProvider, $urlRouterProvider) {
		// For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                controller : "",
                templateUrl: "components/home/home.html"
            })
            // .state('details', {
            //     url: "/details",
            //     controller : "",
            //     templateUrl: "components/home/details.html"
            // });
	}
}
