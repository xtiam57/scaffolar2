(() => {

let Auth = (RESTful, $q, $timeout) => ({
  login(credentials) {
    // code
  },

  logout() {
    // code
  },

  getSession() {
    // code
  },

  destroy() {
    // code
  },

  getToken() {
    // code
  },

  checkSession() {
    let deferred = $q.defer();

    $timeout(() => {
      deferred.resolve();
    }, 500);

    return deferred.promise;
  },
});

angular.module('app')
  .factory('Auth', Auth);

})();
