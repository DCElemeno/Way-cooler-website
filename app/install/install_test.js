'use strict';

/*
	Implement test to test that correct versioning and such is showing
*/

describe('myApp.install module', function() {

  beforeEach(module('myApp.install'));

  describe('install controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var InstallCtrl = $controller('InstallCtrl');
      expect(InstallCtrl).toBeDefined();
    }));

  });
});