(() => {

class MainController {

  constructor(RESTful, CacheService, MainService) {
    this.RESTful = RESTful;
    this.greetings = MainService.greeting('Scaffolar');

    CacheService.put('myKey', 1999);
    console.log(CacheService.info());
  }

  $onInit() {
    console.log('onInit controller');
  }
}

angular.module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'main',
  });

})();
