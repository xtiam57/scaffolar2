(() => {

let PageService = (APP_INFO, $rootScope, $state, $log) => ({
  /**
   * Get current page information
   */
  get() {
    // Setting app version
    $rootScope.APP_INFO = APP_INFO;
    // To access the $log service in HTML
    $rootScope.$log = $log;

    if ($state.is($state.current.name)) {
      // globals setting for the current page
      let appName = APP_INFO.name ? `${APP_INFO.name} | ` : '',
          pageTitle = $state.current.title;

      $rootScope.PAGE_INFO = angular.copy($state.current);
      $rootScope.PAGE_INFO.title = `${appName}${pageTitle}`;
    }
  },
});

angular.module('app')
  .factory('PageService', PageService);

})();
