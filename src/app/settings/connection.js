angular.module('app')
  .run(($rootScope, $http, $log, $window) => {
    // Checking internet connection
    $rootScope.online = navigator.onLine;
    $window.addEventListener('offline', () => {
      $rootScope.$apply(() => {
        $rootScope.online = false;
      });
    }, false);

    $window.addEventListener('online', () => {
      $rootScope.$apply(() => {
        $rootScope.online = true;
      });
    }, false);
  });
