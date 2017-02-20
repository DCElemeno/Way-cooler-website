'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', function($scope) {

	$scope.active = 1;
	$scope.numImages = 4;

	$scope.next = function() { 
		($scope.active == $scope.numImages) ?
			$scope.active = 1:
			$scope.active += 1;
	}

	$scope.prev = function() { 
		($scope.active == 1) ?
			$scope.active = $scope.numImages:
			$scope.active -= 1;
	}

});