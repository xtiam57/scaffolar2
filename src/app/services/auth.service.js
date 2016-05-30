(() => {

class Auth {
  constructor(RESTful, $q, $timeout) {
    this.RESTful = RESTful;
    this.$q = $q;
    this.$timeout = $timeout;
  }

  login(credentials) {
    // code
  }

  logout() {
    // code
  }

  getSession() {
    // code
  }

  destroy() {
    // code
  }

  getToken() {
    // code
  }

  checkSession() {
    let deferred = this.$q.defer();

    this.$timeout(() => {
      deferred.resolve();
    }, 500);

    return deferred.promise;
  }
}

angular.module('app')
  .factory('Auth', Auth);

})();
