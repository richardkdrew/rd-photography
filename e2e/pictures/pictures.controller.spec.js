//
// test/e2e/pictures/pictures.controller.spec.js
//
describe("Pictures Controller", function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should automatically redirect to / when location is pictures', function() {
    browser.get('/#/pictures');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

});
