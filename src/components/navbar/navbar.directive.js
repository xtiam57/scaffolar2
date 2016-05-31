(() => {

let link = ($scope, element, attrs, api) => {

};

angular.module('app')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    link: link,
    scope: {
      var1: '=',
    },
    controllerAs: 'nav'
  }));

})();
