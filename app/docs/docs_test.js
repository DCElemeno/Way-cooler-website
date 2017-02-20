'use strict';

/*
	Implement test to test that correct versioning and such is showing
*/

describe('myApp.docs module', function() {

  beforeEach(module('myApp.docs'));

  describe('docs controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var DocsCtrl = $controller('DocsCtrl');
      expect(DocsCtrl).toBeDefined();
    }));

  });
});