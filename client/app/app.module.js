/**
 * @ngdoc overview
 * @name rdPhotographyApp
 * @description
 * # rdPhotographyApp
 *
 * Main module of the application.
 */
(function () {
  'use strict';

  angular
    .module('app', [
      /*
       * Angular modules
       */
      'ngRoute',
      'ngSanitize',
      /*
       * 3rd Party modules
       */
      'angularGrid',
      /*
       * Feature areas
       */
      'app.pictures'
    ]);
})();
