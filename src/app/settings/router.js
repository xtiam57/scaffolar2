angular.module ('app')
  .config(($stateProvider, $urlRouterProvider) => {
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     controller: 'HomeController',
    //     templateUrl: 'app/views/home/home.tpl.html',
    //     // The following line, is for routes that require authentication
    //     // resolve: { authRequired: ['AuthService', (a) => { return a.checkAuth(); }] },
    //     title: 'Home',
    //   });

    $urlRouterProvider.otherwise('/');
  });
