angular.module('app')
  // Reverse an array
  .filter('reverseList', () => {
    return (items) => {
      return items.slice().reverse();
    };
  })

  // Offset the array
  .filter('startFrom', () => {
    return (input, start) => {
      if (_(input).isArray()) {
        start = +start;
        return input.slice(start);
      }
    };
  });
