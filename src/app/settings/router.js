angular.module ('app')
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>',
        title: 'Home',
        // The following line, is for routes that require authentication
        resolve: { authRequired: ['Auth', (a) => { return a.checkSession(); }] },
      });

    $urlRouterProvider.otherwise('/');
  });
