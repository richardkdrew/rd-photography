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

    function getPictures(offset, limit) {
      var deferred = $q.defer();

      $http.get('app/pictures/pictures.json')
        .success(getPicturesComplete)
        .error(getPicturesFailed);

      function getPicturesComplete(data) {
        var start = offset;
        var length = Number(offset) + Number(limit);
        var pictures = (!data ? [] : data.slice(start, length));
        deferred.resolve(pictures);
      }

      function getPicturesFailed(error, data) {
        console.error('XHR Failed for getPictures.' + error, data);
        deferred.reject(error, data);
      }

      return deferred.promise;
    }
  }
})();
