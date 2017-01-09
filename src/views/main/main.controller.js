(() => {

class MainController {
  constructor(RESTful, StorageService, MainService, toastr) {
    this.RESTful = RESTful;
    this.greetings = MainService.greeting('Scaffolar');

    toastr.success('Hello world!', 'Toastr fun!');

    StorageService.put('myKey', 1999);
    console.log(StorageService.info());
  };

  $onInit() {
    console.log('onInit controller');
  };

  something() {
    console.log('Hello world!');
  }
}

angular.module('app')
  .component('main', {
    templateUrl: 'views/main/main.html',
    controller: MainController,
  });

})();
