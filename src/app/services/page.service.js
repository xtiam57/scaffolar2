(() => {

class PageService {
  constructor(APP_INFO, $rootScope, $state, $log) {
    // Setting app version
    $rootScope.APP_INFO = APP_INFO;
    // To access the $log service in HTML
    $rootScope.$log = $log;

    this.$rootScope = $rootScope;
    this.$state = $state;
  }

  /**
   * Get current page information
   */
  get() {
    if (this.$state.is(this.$state.current.name)) {
      // globals setting for the current page
      let appInfo = this.$rootScope.APP_INFO,
          appName = appInfo.name ? `${appInfo.name} | ` : '',
          pageTitle = this.$state.current.title;

      this.$rootScope.PAGE_INFO = angular.copy(this.$state.current);
      this.$rootScope.PAGE_INFO.title = `${appName}${pageTitle}`;
    }
  }
};

angular.module('app')
  .service('PageService', PageService);

})();
