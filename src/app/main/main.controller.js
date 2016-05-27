(() => {

class MainController {

  constructor(RESTful) {
    this.RESTful = RESTful;
    this.awesomeThings = [];
  }

  $onInit() {
    console.log('onInit controller');
  }
}

angular.module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
