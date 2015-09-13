/**
 * Created by cpitkin on 9/13/15.
 */

describe('Home Page', function(){
  'use strict';

  beforeEach(function (done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

  beforeEach(waitForRouter);

  describe('Server Systems Knowledge', function() {

    it('should have a link', function () {

      _.each(technologies, function (value) {

        expect($('a.href').find(value.link)).not.toBeUndefined();

      });

    });

    it('should have a title', function () {

      _.each(technologies, function (value) {

        expect($('div.h3').find(value.title)).not.toBeUndefined();

      });

    });

    it('should have a description', function () {

      _.each(technologies, function (value) {

        expect($('div.span').find(value.desc)).not.toBeUndefined();

      });

    });

  });

});