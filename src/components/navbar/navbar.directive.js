
// let mark = () => {
//   return {
//     'title': 'Home',
//     'state': 'main'
//   };
// };

// console.dir(mark());



angular.module('app')
  .directive('navbar', () => ({
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    scope: true,
    controllerAs: 'nav'
  }));
