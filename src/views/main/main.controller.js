(() => {

class MainController {
  constructor(RESTful, StorageService, MainService) {
    this.RESTful = RESTful;
    this.greetings = MainService.greeting('Scaffolar');

    StorageService.put('myKey', 1999);
    // console.log(StorageService.info());
  };

  $onInit() {
    console.log('onInit controller');
  };
}

angular.module('app')
  .component('main', {
    templateUrl: 'views/main/main.html',
    controller: MainController,
    controllerAs: 'main',
  });

})();
