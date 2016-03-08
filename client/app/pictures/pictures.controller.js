(function () {
  'use strict';

  angular
    .module('app.pictures')
    .controller('Pictures', Pictures);

  Pictures.$inject = ['picturesService'];

  function Pictures(picturesService) {
    var vm = this;
    vm.ready = false;
    vm.loadMore = loadMore;
    vm.pictures = [];
    vm.hasSome = false;

    activate();

    function activate() {
      return loadMore().then(function () {
        vm.ready = true;
        console.info('Activated Pictures View');
      });
    }

    function loadMore() {
      return picturesService.getPictures().then(function (data) {
        vm.pictures = vm.pictures.concat(data);
        vm.hasSome = vm.pictures.length > 0;
        return vm.pictures;
      });
    }
  }
})();
