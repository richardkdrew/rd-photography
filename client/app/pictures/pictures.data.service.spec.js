'use strict';

describe('factory: picturesDataService', function () {
  var service, routeProvider;

  beforeEach(function () {
    module('ngRoute');

    module(function ($routeProvider) {
      routeProvider = $routeProvider;
      spyOn(routeProvider, 'when').andCallThrough();
      spyOn(routeProvider, 'otherwise').andCallThrough();
    });

    module('app.pictures');

    inject(function($injector) {
      service = $injector.get('picturesDataService');
    })
  });

  it('should be defined', function ()
  {
    expect(service).toBeDefined();
  });

  describe('function: getPictures', function() {

    it('should be defined', function () {
      expect(service.getPictures()).toBeDefined();
    });

    it('should return a promise', function () {
      expect(service.getPictures().then).toBeDefined();
    });
  });
});
