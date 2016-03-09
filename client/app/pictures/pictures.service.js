(function () {
  'use strict';

  angular
    .module('app.pictures')
    .factory('picturesService', picturesService);

  picturesService.$inject = ['$q', 'picturesDataService'];

  function picturesService($q, picturesDataService) {

    var self = this;
    self.limit = 0;
    self.currentOffset = 0;
    self.pictures = [];

    var service = {
      getPictures : getPictures,
      hasMore     : hasMore
    };
    return service;

    function getPictures() {
      var deferred = $q.defer();

      if(self.pictures.length === 0) {
        picturesDataService.getPictures().then(getPicturesComplete, getPicturesFailed);
      }
      else {
        getPicturesComplete(self.pictures);
      }

      function getPicturesComplete(data) {
        self.pictures = data;
        var start = self.currentOffset;
        //console.log('start:' + start);
        var length = self.currentOffset + getLimit();
        //console.log('length:' + length);
        var pictures = data.slice(start, length);
        self.currentOffset = start + pictures.length;
        //console.log('new offset:' + self.currentOffset);
        //console.log('number of pictures found:' + pictures.length);
        deferred.resolve(pictures);
      }

      function getPicturesFailed(data, code) {
        console.error('Failed to retrieve Pictures', code, data);
        deferred.reject(data);
      }

      return deferred.promise;
    }

    function hasMore() {
      return (self.limit + self.currentOffset) < self.pictures.length;
    }

    function getLimit() {
      var perPage = 52;
      if (/Mobi/.test(navigator.userAgent)) {
        perPage = 24;
      }
      //console.log('paging limit: ', perPage);
      return perPage;
    }

    function getOffset() {
      var offset = (self.currentOffset + getLimit());
      //console.log('paging offset: ', offset);
      return offset;
    }
  }
})();
