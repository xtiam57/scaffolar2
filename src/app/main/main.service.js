(() => {

let MainService = () => ({
  greeting(name = 'world') {
    return `Hello ${name}!`;
  },
});

angular.module('app')
  .factory('MainService', MainService);

})();
