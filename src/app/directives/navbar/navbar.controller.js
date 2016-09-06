(() => {

class NavbarController {
  constructor($scope, $rootScope) {
    this._menu = [{
      title: 'Home',
      state: 'main'
    }];
  }

  get menu() { return this._menu; }
  set menu(menu) { this._menu = menu; }
}

angular.module('app')
  .controller('NavbarController', NavbarController);

})();
