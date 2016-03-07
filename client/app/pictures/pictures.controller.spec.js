'use strict';

describe('controller: pictures', function () {
  var controller, mockPicturesService = {}, scope, routeProvider;

  beforeEach(function () {
    module('ngRoute');

    module(function ($routeProvider) {
      routeProvider = $routeProvider;
      spyOn(routeProvider, 'when').andCallThrough();
      spyOn(routeProvider, 'otherwise').andCallThrough();
    });

    module('app.pictures');
  });

  beforeEach(function () {

    inject(function ($rootScope, $q, $controller) {
      scope = $rootScope.$new();

      // Set up the mock pictures service
      mockPicturesService = {
        getPictures: function () {
        },
        hasSome: function () {
        }
      };

      sinon.stub(mockPicturesService, 'getPictures', function () {
        var deferred = $q.defer();
        deferred.resolve([]);
        return deferred.promise;
      });

      sinon.stub(mockPicturesService, 'hasSome', function () {
        return true;
      });

      // Set up the controller under test
      controller = $controller('Pictures', {
        $scope: scope, $routeParams: {},
        picturesService: mockPicturesService
      });
      $rootScope.$apply();
    });
  });

  it('should be defined', function () {
    expect(controller).toBeDefined();
  });

  describe('after activate function is called', function () {

    it('should have called the picturesService:getPictures method', function () {
      expect(mockPicturesService.getPictures.called).toBeTruthy();
    });

    it('should be ready', function () {
      expect(controller.ready).toEqual(true);
    });
  });
});
