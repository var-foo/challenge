'use strict';

/**
 * @ngdoc function
 * @name codeChallengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeChallengeApp
 */
angular.module('codeChallengeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
