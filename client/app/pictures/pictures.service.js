(function () {
  'use strict';

  angular
    .module('app.pictures')
    .factory('picturesService', picturesService);

  picturesService.$inject = ['$q', 'picturesDataService'];

  function picturesService($q, picturesDataService) {

    var service = {
      getPictures : getPictures
    };
    return service;

    function getPictures() {
      var deferred = $q.defer();

      picturesDataService.getPictures(0, 50).then(getPicturesComplete, getPicturesFailed);

      function getPicturesComplete(data) {
        deferred.resolve(data);
      }

      function getPicturesFailed(data, code) {
        console.error('Failed to retrieve Pictures', code, data);
        deferred.reject(data);
      }

      return deferred.promise;
    }
  }
})();
