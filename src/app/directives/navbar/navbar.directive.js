(() => {

let link = ($scope, element, attrs, api) => {

};

angular.module('app')
  .directive('navbar', () => ({
    templateUrl: 'app/directives/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    link: link,
    scope: {
      var1: '=',
    },
    controllerAs: 'nav'
  }));

})();
