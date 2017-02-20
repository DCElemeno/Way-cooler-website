'use strict';

angular.module('myApp.docs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/docs', {
    templateUrl: 'docs/docs.html',
    controller: 'DocsCtrl'
  });
}])

.controller('DocsCtrl', [function() {

}]);