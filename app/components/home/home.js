import homeComponent from './home.component';

export default app => {
  app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/items');

    $stateProvider
      .state('home', {
        url: '/items',
        template: '<home></home>' //Essentially Treats the Home Directive as the Route View.
      });
  }).directive('home', homeComponent);

  if (ENVIRONMENT === 'test') {
    require('./home.test.js');
  }
}
