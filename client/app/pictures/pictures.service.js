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
        var pictures = mapPictures(data);
        deferred.resolve(pictures);
      }

      function getPicturesFailed(data, code) {
        console.error('Failed to retrieve Pictures', code, data);
        deferred.reject(data);
      }

      return deferred.promise;
    }

    function mapPictures(pictures) {
      var mappedPictures = [];

      pictures.forEach(function (element) {

        var picture = {
          id: element.id,
          title: element.title,
          small: {
            url: element.url_m,
            width: Number(element.width_m),
            height: Number(element.height_m)
          },
          medium: {
            url: element.url_c,
            width: Number(element.width_c),
            height: Number(element.height_c)
          },
          large: {
            url: element.url_o,
            width: Number(element.width_o),
            height: Number(element.height_o)
          },
          tags: element.tags.split(" ")
        };
        mappedPictures.push(picture);
      });
      // Sort by id
      pictures.sort(function (a, b) {
        return a.id - b.id;
      });

      return mappedPictures;
    }
  }
})();
