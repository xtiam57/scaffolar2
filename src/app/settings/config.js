angular.module('app')
  .config(($logProvider, $locationProvider, $provide, IndexedDBProvider) => {
    // Log configuration
    $logProvider.debugEnabled(true);

    // Negative currency
    $provide.decorator('$locale', ['$delegate', ($delegate) => {
      if ($delegate.id === 'en-us') {
        $delegate.NUMBER_FORMATS.PATTERNS[1].negPre = '-\u00A4';
        $delegate.NUMBER_FORMATS.PATTERNS[1].negSuf = '';
      }
      return $delegate;
    }]);

    // Setting this property to true will elimate the # from all URLs
    $locationProvider.html5Mode(false);

    // Setting our DB name
    IndexedDBProvider.connect('myDB');

    // Scrolling page to the very top no matter what
    $provide.decorator('$uiViewScroll', ($delegate) => {
      return (uiViewElement) => {
        window.scrollTo(0, 0);
      };
    });
  });
