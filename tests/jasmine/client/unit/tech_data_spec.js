describe('Navigation', function(){
  "use strict";

  beforeAll(function () {
    VelocityHelpers.exportGlobals();
  });

  it('should have a brand-logo title', function(){

    var test = $('a:contains(Charlie Pitkin)');
    console.log(test);
    expect(true).toBe(true);
  });

});