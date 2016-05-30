(() => {

class MainService {
  constructor() {
    // code
  }

  greeting(name = 'world') {
    return `Hello ${name}!`;
  }
}

angular.module('app')
  .factory('MainService', MainService);

})();
