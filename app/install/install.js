'use strict';

angular.module('myApp.install', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/install', {
    templateUrl: 'install/install.html',
    controller: 'InstallCtrl'
  });
}])

.controller('InstallCtrl', [function() {

}]);