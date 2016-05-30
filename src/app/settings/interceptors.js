angular.module('app')
  .config(($httpProvider) => {
    $httpProvider.interceptors.push(['$q', '$location', ($q, $location) => {
      return {
        request: (config) => {
          return config || $q.when(config);
        },

        response: (response) => {
          return response || $q.when(response);
        },

        responseError: (rejection) => {
          console.error('Failed with', rejection.status);
          return $q.reject(rejection);
        }
      };
    }]);
  });
