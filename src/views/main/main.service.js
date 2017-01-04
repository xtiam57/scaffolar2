;(() => {

class MainService {
  constructor() {

  }

  // methods
  greeting(name = 'world') {
    return `Hello ${name}!`;
  }
};

angular.module('app')
  .service('MainService', MainService);

})();
