(function() {
  'use strict';

  angular.module('app.pictures')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/pictures/pictures.html',
        controller: 'Pictures',
        controllerAs: 'vm'
      }).otherwise('/');
  }
})();

