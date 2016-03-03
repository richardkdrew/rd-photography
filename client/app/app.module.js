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
       * Reusable cross-app components
       */
      'app.widgets',
      /*
       * Feature areas
       */
      'app.pictures'
    ]);
})();
