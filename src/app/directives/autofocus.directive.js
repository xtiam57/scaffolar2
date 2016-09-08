angular.module('app')
  .directive('autofocus', ($timeout) => ({
    restrict: 'A',
    scope: true,
    link($scope, element, attrs, api) {
      $timeout(() => {
        element[0].focus();
      });
    }
  }));


angular.module('app')
  .factory('SOme', () => {

    class SOme extends BaseFactory {
      constructor(name, lastname) {
        super(name, lastname);
      }

      // methods
    };

    return SOme;
  });
