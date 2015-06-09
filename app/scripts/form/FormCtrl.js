angular.module('codeChallengeApp').controller('FormCtrl', function($scope){
    'use strict';

    $scope.submitForm = function(){
        console.log('user', $scope.user);
    }
});
