;(() => {

let link = ($scope, element, attrs, api) => {
  api.$validators.compareTo = (value) => {
    return value === $scope.otherModelValue;
  };

  $scope.$watch('otherModelValue', () => {
    api.$validate();
  });
};

angular.module('app')
  .directive('compareTo', () => ({
    restrict: 'A',
    link: link,
    require: 'ngModel',
    scope: {
      otherModelValue: '=compareTo',
    },
  }));

})();
