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
        hasMore: function () {
        }
      };

      sinon.stub(mockPicturesService, 'getPictures', function () {
        var deferred = $q.defer();
        deferred.resolve(mockData.getMockPictures());
        return deferred.promise;
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

  describe('function: loadMore', function () {

    it('should be defined', function () {
      expect(controller.loadMore()).toBeDefined();
    });

  });

  describe('when function: activate is called', function () {

    it('should call the picturesService:getPictures function', function () {
      expect(mockPicturesService.getPictures.called).toBeTruthy();
    });

    it('should have some pictures', function () {
      expect(controller.hasSome).toEqual(true);
    });

    it('should have 3 exactly pictures loaded', function () {
      expect(controller.pictures.length).toEqual(3);
    });

    it('should be ready', function () {
      expect(controller.ready).toEqual(true);
    });

    describe('then function: loadMore is called', function () {

      it('should have 3 more (6) pictures loaded', function () {

        // Call the loadMore function
        scope.$apply(function () {
          controller.loadMore();
        });

        expect(controller.pictures.length).toEqual(6);
      });

    })
  });
});
