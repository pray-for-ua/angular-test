import homeComponent from './home.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/items/?view=table');

    $stateProvider
      .state('home', {
        url: '/items/?view=table',
        template: '<home></home>' //Essentially Treats the Home Directive as the Route View.
      });
  }).directive('home', homeComponent);
}
