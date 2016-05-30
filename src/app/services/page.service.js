(() => {

class PageService {
  constructor(APP_INFO, $rootScope, $state, $log) {
    this._appInfo = APP_INFO;
    this.$rootScope = $rootScope;
    this.$state = $state;

    // Setting app version
    $rootScope.APP_INFO = APP_INFO;
    // To access the $log service in HTML
    $rootScope.$log = $log;
  }

  get() {
    if (this.$state.is(this.$state.current.name)) {
      // globals setting for the current page
      let appName = this._appInfo.name ? `${this._appInfo.name} | ` : '',
          pageTitle = this.$state.current.title;

      this.$rootScope.PAGE_INFO = angular.copy(this.$state.current);
      this.$rootScope.PAGE_INFO.title = `${appName}${pageTitle}`;
    }
  };
}

angular.module('app')
  .factory('PageService', PageService);

})();
