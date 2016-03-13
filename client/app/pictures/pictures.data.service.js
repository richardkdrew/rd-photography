(function () {
  'use strict';

  angular
    .module('app.pictures')
    .factory('picturesDataService', picturesDataService);

  picturesDataService.$inject = ['$q', '$http'];

  function picturesDataService($q, $http) {

    var service = {
      getPictures: getPictures
    };

    return service;

    function getPictures() {
      var deferred = $q.defer();

      $http.get('app/pictures/pictures.json')
        .success(getPicturesComplete)
        .error(getPicturesFailed);

      function getPicturesComplete(data) {
        deferred.resolve(data);
      }

      function getPicturesFailed(error, data) {
        console.error('XHR Failed for getPictures.' + error, data);
        deferred.reject(error, data);
      }

      return deferred.promise;
    }
  }
})();
