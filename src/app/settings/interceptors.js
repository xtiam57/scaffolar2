angular.module('app')
  .config(($httpProvider) => {
    $httpProvider.interceptors.push(['$q', '$location', '$injector', ($q, $location, $injector) => {
      return {
        request: (config) => {
          let Auth = $injector.get('Auth');
          config.headers['X-Auth-Token'] = Auth.getToken();

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
