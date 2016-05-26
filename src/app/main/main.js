angular.module('app')
  .config(($stateProvider) => {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main></main>'
      });
  });
