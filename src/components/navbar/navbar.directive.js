(() => {

let link = ($scope, element, attrs, api) => {
  console.log('$scope:', $scope);
  console.log('element:', element);
  console.log('attrs:', attrs);
  console.log('api:', api);
}

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


